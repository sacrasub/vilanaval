import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# 1. Update the Admin Login Logic to query Supabase
old_admin = '''            // Admin bypass
            if (nip === 'sindico' || nip.includes('admin')) {
                if (senha !== 'sindico') {
                    alert("Senha do Síndico Incorreta!");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                    return;
                }
                localStorage.setItem('vnt_role', 'sindico');
                localStorage.setItem('vnt_user', 'Síndico');
                window.location.href = 'dashboard.html';
                return;
            }'''
            
new_admin = '''            // Checagem Dinamica do Sindico
            if (nip === 'sindico' || nip.includes('admin')) {
                let validPwd = 'sindico';
                if (window._supabase) {
                    const { data } = await window._supabase.from('moradores').select('dados').eq('nip', 'sindico');
                    if (data && data.length > 0 && data[0].dados && data[0].dados.senha) {
                        validPwd = data[0].dados.senha;
                    }
                }
                if (senha !== validPwd) {
                    alert("Senha do Síndico Incorreta!");
                    btn.innerHTML = 'Acessar <i class="ri-arrow-right-line"></i>';
                    btn.disabled = false;
                    return;
                }
                localStorage.setItem('vnt_role', 'sindico');
                localStorage.setItem('vnt_user', 'Síndico');
                window.location.href = 'dashboard.html';
                return;
            }'''
            
js_content = js_content.replace(old_admin, new_admin)

# 2. Update First Access Password Confirmation
old_first_access = '''                                const novaSenha = document.getElementById('novaSenha').value;
                                if (novaSenha.length < 6) {
                                    alert("A senha deve ter no mínimo 6 caracteres para ser segura.");
                                    return;
                                }'''
new_first_access = '''                                const novaSenha = document.getElementById('novaSenha').value;
                                const novaSenhaConf = document.getElementById('novaSenhaConf').value;
                                if (novaSenha.length < 6) {
                                    alert("A senha deve ter no mínimo 6 caracteres para ser segura.");
                                    return;
                                }
                                if (novaSenha !== novaSenhaConf) {
                                    alert("A confirmação não coincide com a nova senha digitada.");
                                    return;
                                }'''
js_content = js_content.replace(old_first_access, new_first_access)


# 3. Update Dashboard Password Reset Logic and enable Sindico support
old_dash_pwd = '''window.confirmarMudarSenhaDashboard = async function() {
    const input = document.getElementById('novaSenhaInputDash');
    const novaSenha = input.value;
    if(novaSenha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }
    const nip = localStorage.getItem('vnt_role');
    if(nip === 'sindico') {
        alert("O síndico master não pode mudar a senha por aqui nesta versão do MVP.");
        fecharModalSenhaDashboard();
        return;
    }
    
    if(!window._supabase) {
        alert("Falha de conexão com a Base de Dados. Tente novamente.");
        return;
    }
    
    document.getElementById('btnConfirmaNovaSenha').innerHTML = 'Salvando...';
    try {
        const { data, error } = await window._supabase.from('moradores').select('*').eq('nip', nip);
        if(data && data.length > 0) {
            let dados = data[0].dados || {};
            dados.senha = novaSenha;
            await window._supabase.from('moradores').update({ dados: dados }).eq('nip', nip);
            alert("Senha alterada com sucesso!");
            input.value = '';
            fecharModalSenhaDashboard();
        } else {
            alert("Erro ao localizar seu registro no banco de dados.");
        }
    } catch(e) {
        alert("Erro fatal ao salvar senha.");
    }
    document.getElementById('btnConfirmaNovaSenha').innerHTML = 'Salvar Modificação';
}'''

new_dash_pwd = '''window.confirmarMudarSenhaDashboard = async function() {
    const input = document.getElementById('novaSenhaInputDash');
    const inputConf = document.getElementById('novaSenhaInputDashConf');
    const novaSenha = input.value;
    const novaSenhaConf = inputConf.value;
    
    if(novaSenha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }
    if (novaSenha !== novaSenhaConf) {
        alert("A confirmação não coincide com a nova senha digitada.");
        return;
    }
    
    const nip = localStorage.getItem('vnt_role');
    if(!window._supabase) {
        alert("Falha de conexão com a Base de Dados. Tente novamente.");
        return;
    }
    
    document.getElementById('btnConfirmaNovaSenha').innerHTML = 'Salvando...';
    try {
        const { data, error } = await window._supabase.from('moradores').select('*').eq('nip', nip);
        if(data && data.length > 0) {
            let dados = data[0].dados || {};
            dados.senha = novaSenha;
            await window._supabase.from('moradores').update({ dados: dados }).eq('nip', nip);
            alert("Senha alterada com sucesso!");
        } else if (nip === 'sindico') {
            // Sindico changing password for the first time
            let mockData = { nome: 'Síndico', senha: novaSenha };
            await window._supabase.from('moradores').insert([{ nip: 'sindico', dados: mockData }]);
            alert("Senha do Síndico alterada e cadastrada com sucesso!");
        } else {
            alert("Erro ao localizar seu registro no banco de dados.");
        }
        input.value = '';
        inputConf.value = '';
        fecharModalSenhaDashboard();
    } catch(e) {
        alert("Erro fatal ao salvar senha.");
    }
    document.getElementById('btnConfirmaNovaSenha').innerHTML = 'Salvar Modificação';
}'''

js_content = js_content.replace(old_dash_pwd, new_dash_pwd)

# 4. Inject togglePwd Globally
toggle_code = '''
window.togglePwd = function(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if(input && icon) {
        if(input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('ri-eye-line');
            icon.classList.add('ri-eye-off-line');
        } else {
            input.type = 'password';
            icon.classList.remove('ri-eye-off-line');
            icon.classList.add('ri-eye-line');
        }
    }
}
'''
if "window.togglePwd" not in js_content:
    js_content += toggle_code

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print("Lógicas de js de senha injetadas perfeitamente.")
