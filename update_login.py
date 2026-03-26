import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

old_login_block = '''const loginForm = document.getElementById('loginForm');
if (loginForm && !document.getElementById('pnrGridContainer')) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nip = document.getElementById('nip').value;
        const senha = document.getElementById('senha').value;

        // Simple auth simulation
        if (nip === 'sindico') {
            localStorage.setItem('vnt_role', 'sindico');
            localStorage.setItem('vnt_user', 'Síndico');
        } else {
            localStorage.setItem('vnt_role', nip);
            localStorage.setItem('vnt_user', nip);
        }
        window.location.href = 'dashboard.html';
    });
}'''

new_login_block = '''const loginForm = document.getElementById('loginForm');
if (loginForm && !document.getElementById('pnrGridContainer')) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nip = document.getElementById('nip').value;
        const senha = document.getElementById('senha').value;
        
        const btn = loginForm.querySelector("button[type='submit']");
        btn.innerHTML = "Verificando...";
        btn.disabled = true;

        if (nip === 'sindico') {
            localStorage.setItem('vnt_role', 'sindico');
            localStorage.setItem('vnt_user', 'Síndico');
            window.location.href = 'dashboard.html';
        } else {
            // VERIFICA SE O NIP ESTÁ CADASTRADO PELO SINDICO NO SUPABASE
            if(_supabase) {
                const { data, error } = await _supabase.from('moradores').select('nip').eq('nip', nip);
                if(data && data.length > 0) {
                    localStorage.setItem('vnt_role', nip);
                    localStorage.setItem('vnt_user', nip);
                    window.location.href = 'dashboard.html';
                } else {
                    alert("Acesso Negado! Este NIP não está cadastrado/autorizado na vila. Procure a Seção de Moradias (Síndico) para inclusão prévia.");
                    btn.innerHTML = "Acessar Sistema";
                    btn.disabled = false;
                }
            } else {
                localStorage.setItem('vnt_role', nip);
                localStorage.setItem('vnt_user', nip);
                window.location.href = 'dashboard.html';
            }
        }
    });
}'''

js_content = js_content.replace(old_login_block, new_login_block)

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
print("Login updated")
