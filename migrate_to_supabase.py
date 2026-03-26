import os

html_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Inject Supabase JS inside dashboard
if '@supabase' not in content:
    content = content.replace('<script src="script.js"></script>', '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>\n    <script src="script.js"></script>')
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(content)

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
    js_content = f.read()

supabase_init = '''
// SUPABASE ENGINE
const supabaseUrl = 'https://jzvoxaqhteqdfyurjlbk.supabase.co';
const supabaseKey = 'sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H';
const _supabase = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;
'''

if 'const _supabase' not in js_content:
    parts = js_content.split('const role = localStorage.getItem(\'vnt_role\');')
    if len(parts) > 1:
        js_content = parts[0] + supabase_init + '\nconst role = localStorage.getItem(\'vnt_role\');' + parts[1]


# FIX REGISTRATION
if "form.addEventListener('submit', (e) => {" in js_content:
    js_content = js_content.replace("form.addEventListener('submit', (e) => {", "form.addEventListener('submit', async (e) => {")

old_save_morador = '''                // Persist
                let moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
                moradores.push(formData);
                localStorage.setItem('vnt_moradores', JSON.stringify(moradores));'''
new_save_morador = '''                // Persist Cloud
                if(_supabase) {
                    await _supabase.from('moradores').delete().eq('nip', formData.dadosPessoais.nip);
                    await _supabase.from('moradores').insert([{ nip: formData.dadosPessoais.nip, dados: formData }]);
                } else {
                    let moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
                    moradores.push(formData);
                    localStorage.setItem('vnt_moradores', JSON.stringify(moradores));
                }'''
js_content = js_content.replace(old_save_morador, new_save_morador)


# FIX MORADORES GET
old_render_start = '''function renderMoradores() {
    const isSindico = localStorage.getItem('vnt_role') === 'sindico';
    if (!isSindico) return;

    const pnrGrid = document.getElementById('pnrGridContainer');
    if (!pnrGrid) return;

    let moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];'''

new_render_start = '''async function renderMoradores() {
    const isSindico = localStorage.getItem('vnt_role') === 'sindico';
    if (!isSindico) return;

    const pnrGrid = document.getElementById('pnrGridContainer');
    if (!pnrGrid) return;
    
    let moradores = [];
    if(_supabase) {
        let { data } = await _supabase.from('moradores').select('dados');
        if(data) moradores = data.map(d => d.dados);
    } else {
        moradores = JSON.parse(localStorage.getItem('vnt_moradores')) || [];
    }'''
js_content = js_content.replace(old_render_start, new_render_start)
js_content = js_content.replace('renderMoradores();', 'setTimeout(()=>renderMoradores(), 100);')


# FIX CHAMADOS GET
old_render_chamados_start = '''function renderChamados() {
    const isSindico = localStorage.getItem('vnt_role') === 'sindico';
    const chamados = JSON.parse(localStorage.getItem('vnt_chamados')) || [];'''

new_render_chamados_start = '''async function renderChamados() {
    const isSindico = localStorage.getItem('vnt_role') === 'sindico';
    let chamados = [];
    if(_supabase) {
        let { data } = await _supabase.from('chamados').select('dados');
        if(data) chamados = data.map(d => d.dados);
    } else {
        chamados = JSON.parse(localStorage.getItem('vnt_chamados')) || [];
    }'''
js_content = js_content.replace(old_render_chamados_start, new_render_chamados_start)
js_content = js_content.replace('renderChamados();', 'setTimeout(()=>renderChamados(), 100);')


# FIX CHAMADOS SUBMIT
if "document.getElementById('formNovoChamado').addEventListener('submit', (e) => {" in js_content:
    js_content = js_content.replace("document.getElementById('formNovoChamado').addEventListener('submit', (e) => {", 
                                    "const formNC = document.getElementById('formNovoChamado');\n    if(formNC) formNC.addEventListener('submit', async (e) => {")

old_novo_chamado = '''        let chamados = JSON.parse(localStorage.getItem('vnt_chamados')) || [];
        chamados.push(chamado);
        localStorage.setItem('vnt_chamados', JSON.stringify(chamados));
        
        alert('Chamado registrado!');'''

new_novo_chamado = '''        if(_supabase) {
            await _supabase.from('chamados').insert([{ nip_solicitante: role || 'desconhecido', dados: chamado }]);
        } else {
            let chamados = JSON.parse(localStorage.getItem('vnt_chamados')) || [];
            chamados.push(chamado);
            localStorage.setItem('vnt_chamados', JSON.stringify(chamados));
        }
        alert('Chamado registrado!');'''
js_content = js_content.replace(old_novo_chamado, new_novo_chamado)

# FULLCALENDAR EVENTS GET
old_events_func = '''        events: function(info, successCallback, failureCallback) {
            let reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];'''
new_events_func = '''        events: async function(info, successCallback, failureCallback) {
            let reservas = [];
            if(_supabase) {
                let { data } = await _supabase.from('reservas').select('dados');
                if(data) reservas = data.map(d=>d.dados);
            } else {
                reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];
            }'''
js_content = js_content.replace(old_events_func, new_events_func)

# RESERVA SUBMIT
if "document.getElementById('novaReservaForm').addEventListener('submit', (e) => {" in js_content:
    js_content = js_content.replace("document.getElementById('novaReservaForm').addEventListener('submit', (e) => {", 
                                    "document.getElementById('novaReservaForm').addEventListener('submit', async (e) => {")

old_reserva_submit = '''        let reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];
        reservas.push(res);
        localStorage.setItem('vnt_reservas', JSON.stringify(reservas));
        
        alert('Pedido de reserva enviado! (Pendente de Aprovação)');'''
new_reserva_submit = '''        if(_supabase) {
            await _supabase.from('reservas').insert([{ nip_solicitante: role || 'desconhecido', dados: res }]);
        } else {
            let reservas = JSON.parse(localStorage.getItem('vnt_reservas')) || [];
            reservas.push(res);
            localStorage.setItem('vnt_reservas', JSON.stringify(reservas));
        }
        alert('Pedido de reserva enviado! (Pendente de Aprovação)');'''
js_content = js_content.replace(old_reserva_submit, new_reserva_submit)


with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Rewrites done.")
