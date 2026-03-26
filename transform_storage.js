const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf8');

const storageApi = `
// --- Supabase Storage Wrapper ---
async function getStorageData(key) {
    if(!window._supabase) return JSON.parse(localStorage.getItem(key)) || null;
    try {
        const { data } = await window._supabase.from('moradores').select('dados').eq('nip', 'sistema');
        if(data && data.length > 0 && data[0].dados && data[0].dados[key]) {
            return data[0].dados[key];
        }
    } catch(e) {}
    return JSON.parse(localStorage.getItem(key)) || null;
}

async function setStorageData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    if(!window._supabase) return;
    try {
        const { data } = await window._supabase.from('moradores').select('dados').eq('nip', 'sistema');
        let dados = {};
        if(data && data.length > 0 && data[0].dados) {
            dados = data[0].dados;
        }
        dados[key] = value;
        const res = await window._supabase.from('moradores').select('id').eq('nip', 'sistema');
        if(res.data && res.data.length > 0) {
            await window._supabase.from('moradores').update({ dados: dados }).eq('nip', 'sistema');
        } else {
            await window._supabase.from('moradores').insert([{ nip: 'sistema', dados: dados }]);
        }
    } catch(e) {}
}
// ---------------------------------
`;

// Insert wrapper 
js = js.replace("document.addEventListener('DOMContentLoaded', () => {", storageApi + "\ndocument.addEventListener('DOMContentLoaded', async () => {");

// Fix chamados definition inside DOMContentLoaded
js = js.replace("let chamados = JSON.parse(localStorage.getItem(chamadosKey)) || [];",
    "let chamados = await getStorageData(chamadosKey) || [];");

// Fix chamados save logic inside submit
js = js.replace("formNovoChamado.addEventListener('submit', (e) => {",
    "formNovoChamado.addEventListener('submit', (e) => {");

// Wait, the setTimeOut is inside that.
js = js.replace("setTimeout(() => {", "setTimeout(async () => {");
js = js.replace("localStorage.setItem(chamadosKey, JSON.stringify(chamados));",
    "await setStorageData(chamadosKey, chamados);");


// Fix reservas Calendar
js = js.replace("function initCalendar() {", "async function initCalendar() {");

js = js.replace("let reservasData = localStorage.getItem('vnt_reservas');",
    "let reservasData = await getStorageData('vnt_reservas');\n    if(typeof reservasData === 'object') reservasData = JSON.stringify(reservasData);");

// Because there are two lines doing setting default to local storage
js = js.replace("localStorage.setItem('vnt_reservas', reservasData);",
    "await setStorageData('vnt_reservas', JSON.parse(reservasData));");

js = js.replace("events: function (info, successCallback, failureCallback)",
    "events: async function (info, successCallback, failureCallback)");

js = js.replace("let reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];",
    "let reservas = await getStorageData('vnt_reservas') || [];");

// Fix Reserva submit form
js = js.replace("formReserva.addEventListener('submit', function (e) {",
    "formReserva.addEventListener('submit', async function (e) {");

js = js.replace("let reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];",
    "let reservas = await getStorageData('vnt_reservas') || [];");

js = js.replace("localStorage.setItem('vnt_reservas', JSON.stringify(reservas));",
    "await setStorageData('vnt_reservas', reservas);");

// Fix cadastro form
js = js.replace("function submitFormData(form) {", "async function submitFormData(form) {");
js = js.replace("let moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];",
    "let moradores = await getStorageData('vnt_moradores') || [];");
js = js.replace("localStorage.setItem('vnt_moradores', JSON.stringify(moradores));",
    "await setStorageData('vnt_moradores', moradores);");


fs.writeFileSync('script.js', js);
console.log("Successfully transformed script.js to use Supabase instead of localstorage");
