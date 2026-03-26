import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

validator_code = '''
// Funcao para Validar NIP via Modulo 11 (Marinha do Brasil)
function validarNIP(nipComMascara) {
    let numbers = nipComMascara.replace(/\D/g, '');
    if (numbers.length !== 8) return false;
    
    let soma = 0;
    let pesos = [8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 7; i++) {
        soma += parseInt(numbers[i]) * pesos[i];
    }
    
    let resto = soma % 11;
    let dv = 11 - resto;
    if (dv === 10 || dv === 11) {
        dv = 0;
    }
    
    return dv === parseInt(numbers[7]);
}
'''

if "function validarNIP" not in js_content:
    js_content += "\n" + validator_code

# Inject validation into Login
old_login_check = '''if(_supabase) {
                const { data, error } = await _supabase.from('moradores').select('nip').eq('nip', nip);'''

new_login_check = '''if (!validarNIP(nip)) {
                alert("NIP Inválido! Verifique a digitação do Dígito Verificador (DV).");
                btn.innerHTML = "Acessar Sistema";
                btn.disabled = false;
                return;
            }

            // VERIFICA SE O NIP ESTÁ CADASTRADO PELO SINDICO NO SUPABASE
            if(_supabase) {
                // Use numbers for query to prevent mask mismatch issues
                const nipNumbers = nip.replace(/\D/g, '');
                const { data, error } = await _supabase.from('moradores').select('nip').eq('nip', nip); // wait we need to check raw or masked? We keep the mask matching!'''
js_content = js_content.replace(old_login_check, new_login_check)

# Since the previous code had a specific indentation, the replace might fail if not matched perfectly.
# A more resilient replace for loginForm checking:
login_inject_point = "if (nip === 'sindico') {"

if "if (!validarNIP(nip))" not in js_content:
    login_injected = '''if (nip === 'sindico') {
            localStorage.setItem('vnt_role', 'sindico');
            localStorage.setItem('vnt_user', 'Síndico');
            window.location.href = 'dashboard.html';
        } else {
            if (!validarNIP(nip)) {
                alert("NIP Matematiamente Inválido pela regra MB (Módulo 11)! Verifique o Dígito Verificador.");
                btn.innerHTML = "Acessar Sistema";
                btn.disabled = false;
                return;
            }'''
    
    js_content = js_content.replace('''if (nip === 'sindico') {
            localStorage.setItem('vnt_role', 'sindico');
            localStorage.setItem('vnt_user', 'Síndico');
            window.location.href = 'dashboard.html';
        } else {''', login_injected)

# Inject Validation into Form Submission
form_inject_point = '''const data = new FormData(e.target);'''
form_injected = '''const data = new FormData(e.target);
            const nipInserido = document.getElementById('nip').value;
            if(!validarNIP(nipInserido)) {
                alert("O NIP inserido não é um NIP oficial da Marinha válido! Revise o Dígito Verificador.");
                return;
            }'''
if "O NIP inserido não" not in js_content:
    js_content = js_content.replace('const formData = new FormData(e.target);', '''const formData = new FormData(e.target);
            const nipInserido = document.getElementById('nip').value;
            if(!validarNIP(nipInserido)) {
                alert("O NIP inserido não é um NIP oficial da Marinha válido! Revise o Dígito Verificador.");
                const btn = e.target.querySelector("button[type='submit']");
                if(btn) { btn.innerHTML = "Enviar Cadastro"; btn.disabled = false; }
                return;
            }''')

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
    print("Módulo 11 injetado.")
