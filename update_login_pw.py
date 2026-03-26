import codecs
import re

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Pattern for the login query check so we can replace it smoothly even if indentation differs slightly.
# We look for: if(_supabase) { ...  } else { ... fallback ... }

new_code = '''            if(_supabase) {
                const { data, error } = await _supabase.from('moradores').select('*').eq('nip', nip);
                if(data && data.length > 0) {
                    const moradorData = data[0];
                    const dados = moradorData.dados || {};
                    const senhaBanco = dados.senha || 'marinha123';
                    
                    if (senha !== senhaBanco) {
                        alert("Senha Incorreta!");
                        btn.innerHTML = "Acessar Sistema";
                        btn.disabled = false;
                        return;
                    }
                    
                    if (senhaBanco === 'marinha123') {
                        // FORCE MUDANCA
                        const modal = document.getElementById('modalMudarSenha');
                        if (modal) {
                            modal.style.display = 'flex';
                            document.getElementById('btnSalvarSenha').onclick = async () => {
                                const novaSenha = document.getElementById('novaSenha').value;
                                if(novaSenha.length < 6) {
                                    alert("Sua nova senha deve ter pelo menos 6 caracteres para ser segura.");
                                    return;
                                }
                                const btnSalvar = document.getElementById('btnSalvarSenha');
                                btnSalvar.innerHTML = "Salvando...";
                                btnSalvar.disabled = true;
                                
                                dados.senha = novaSenha;
                                await _supabase.from('moradores').update({ dados: dados }).eq('nip', nip);
                                
                                localStorage.setItem('vnt_role', nip);
                                localStorage.setItem('vnt_user', nip);
                                window.location.href = 'dashboard.html';
                            };
                        }
                    } else {
                        localStorage.setItem('vnt_role', nip);
                        localStorage.setItem('vnt_user', nip);
                        window.location.href = 'dashboard.html';
                    }
                } else {
                    alert("Acesso Negado! Este NIP não está cadastrado/autorizado na vila. Procure a Seção de Moradias (Síndico) para inclusão prévia.");
                    btn.innerHTML = "Acessar Sistema";
                    btn.disabled = false;
                }
            } else {'''

# We need to find the old exact string we generated in step 921 and updated slightly in 957:
old_login_start = "            if(_supabase) {"
old_login_end = "            } else {"

# Get substring between old_login_start and old_login_end (the first occurrence inside the form listener)
start_idx = js_content.find("VERIFICA SE O NIP ESTÁ CADASTRADO PELO SINDICO NO SUPABASE")
if start_idx != -1:
    s_idx = js_content.find(old_login_start, start_idx)
    e_idx = js_content.find(old_login_end, s_idx)
    if s_idx != -1 and e_idx != -1:
        replaced = js_content[:s_idx] + new_code + js_content[e_idx+len(old_login_end):]
        with codecs.open(js_path, 'w', encoding='utf-8') as f:
            f.write(replaced)
        print("Login script updated with password flow.")
    else:
        print("Could not find start/end bounds")
else:
    print("Could not find marker")

