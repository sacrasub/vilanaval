import codecs

dashboard_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(dashboard_path, 'r', encoding='utf-8') as f:
    dash_content = f.read()

# 1. Modify User Profile buttons in Dashboard
old_profile = '''<button id="logoutBtn" class="logout-btn" title="Sair"><i class="ri-logout-box-r-line"></i></button>'''
new_profile = '''<button class="logout-btn" title="Alterar Senha" onclick="abrirModalSenhaDashboard()" style="color:var(--primary); margin-right:5px;"><i class="ri-lock-password-line"></i></button>
                <button id="logoutBtn" class="logout-btn" title="Sair"><i class="ri-logout-box-r-line"></i></button>'''

if "abrirModalSenhaDashboard" not in dash_content:
    dash_content = dash_content.replace(old_profile, new_profile)
    
    # 2. Add Modal for Password Change in Dashboard
    modal_html = '''
    <!-- Modal Alterar Senha Dashboard -->
    <div id="modalSenhaDashboard" class="modal-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; align-items: center; justify-content: center;">
        <div class="modal-content glass-panel" style="max-width: 400px; text-align: center; padding: 25px; border-radius: 12px; background: rgba(255,255,255,0.95); position:relative;">
            <button onclick="fecharModalSenhaDashboard()" style="position:absolute; top: 10px; right: 15px; background: transparent; border:none; font-size:1.2rem; cursor:pointer;"><i class="ri-close-line"></i></button>
            <h3 style="color: var(--primary-color); margin-bottom: 10px;"><i class="ri-lock-password-line"></i> Alterar Senha</h3>
            <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 0.9rem;">Insira sua nova senha abaixo. Ela substituirá a senha atual imediatamente.</p>
            <div class="input-group">
                <i class="ri-lock-line" style="position: absolute; left: 35px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenhaInputDash" placeholder="Nova Senha (min 6 caracteres)" style="width: 100%; padding: 12px 15px 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border); margin-bottom: 15px;" required>
            </div>
            <button id="btnConfirmaNovaSenha" class="btn btn-primary" onclick="confirmarMudarSenhaDashboard()" style="width: 100%; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none;">Salvar Modificação</button>
        </div>
    </div>
    '''
    dash_content = dash_content.replace('</body>', modal_html + '\n</body>')
    with codecs.open(dashboard_path, 'w', encoding='utf-8') as f:
        f.write(dash_content)
    print("Dashboard visual injetado.")

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# 3. Add the Reset Password button to the PNR card for Sindico
old_pnr_buttons = '''<button class="btn btn-sm btn-outline mt-2" onclick="alert('Funcionalidade Editar Morador: NIP ' + '')" style="width:100%; border: 1px solid #1a73e8; color: #1a73e8; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;"><i class="ri-pencil-line"></i> Editar</button>
            </div>'''
new_pnr_buttons = '''<button class="btn btn-sm btn-outline mt-2" onclick="alert('Funcionalidade Editar Morador: NIP ' + '')" style="width:100%; border: 1px solid #1a73e8; color: #1a73e8; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px; font-size: 0.8rem;"><i class="ri-pencil-line"></i> Editar Alocação</button>
                <button class="btn btn-sm btn-outline mt-1" onclick="resetarSenhaMorador('', '')" style="width:100%; border: 1px solid #d97706; color: #d97706; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px; font-size: 0.8rem;"><i class="ri-restart-line"></i> Restaurar Senha Local</button>
            </div>'''
js_content = js_content.replace(old_pnr_buttons, new_pnr_buttons)

# 4. Add the Logic functions
password_logic = '''
// PASSWORD LOGIC
window.abrirModalSenhaDashboard = function() {
    const m = document.getElementById('modalSenhaDashboard');
    if(m) m.style.display = 'flex';
}
window.fecharModalSenhaDashboard = function() {
    const m = document.getElementById('modalSenhaDashboard');
    if(m) m.style.display = 'none';
}
window.confirmarMudarSenhaDashboard = async function() {
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
}

window.resetarSenhaMorador = async function(nipTarget, nome) {
    const confirmacao = confirm(ATENÇÃO: Você tem certeza que deseja RESETAR a senha do morador  (NIP: ) para o padrão "marinha123"? Isso exigirá que ele crie uma nova senha no proximo acesso.);
    if(!confirmacao) return;

    if(!window._supabase) {
        alert("Sistema Offline. Tente Novamente.");
        return;
    }
    
    try {
        const { data, error } = await window._supabase.from('moradores').select('*').eq('nip', nipTarget);
        if(data && data.length > 0) {
            let dados = data[0].dados || {};
            dados.senha = "marinha123";
            await window._supabase.from('moradores').update({ dados: dados }).eq('nip', nipTarget);
            alert("Sucesso! A senha de " + nome + " foi completamente restaurada para marinha123.");
        } else {
            alert("Morador não encontrado no banco.");
        }
    } catch (e) {
        alert("Falha ao comunicar com o servidor.");
    }
}
'''

if "window.abrirModalSenhaDashboard" not in js_content:
    js_content += "\n" + password_logic
    with codecs.open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Logica e JS injetados.")
else:
    print("Ja existe a lógica JS.")

