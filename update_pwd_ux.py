import codecs
import re

# 1. Update index.html
html_path = r'd:\Estrela\Documents\VilaNaval\index.html'
with codecs.open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

old_login_senha = '''<div class="input-group">
                    <i class="ri-lock-line"></i>
                    <input type="password" id="senha" placeholder="Senha" required>
                </div>'''
                
new_login_senha = '''<div class="input-group" style="position:relative;">
                    <i class="ri-lock-line"></i>
                    <input type="password" id="senha" placeholder="Senha" required style="padding-right: 40px;">
                    <i class="ri-eye-line" id="toggleSenhaLog" style="position:absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--text-muted);" onclick="togglePwd('senha', 'toggleSenhaLog')"></i>
                </div>'''

html_content = html_content.replace(old_login_senha, new_login_senha)

old_first_access = '''            <div class="input-group">
                <i class="ri-lock-line" style="position: absolute; left: 35px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenha" placeholder="Digite a nova senha" style="width: 100%; padding: 12px 15px 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border); margin-bottom: 15px;" required>
            </div>'''
            
new_first_access = '''            <div class="input-group" style="position:relative; margin-bottom:10px;">
                <i class="ri-lock-line" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenha" placeholder="Digite a nova senha" style="width: 100%; padding: 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border);" required>
                <i class="ri-eye-line" id="toggleP1" style="position:absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--text-muted);" onclick="togglePwd('novaSenha', 'toggleP1')"></i>
            </div>
            <div class="input-group" style="position:relative; margin-bottom:15px;">
                <i class="ri-lock-line" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenhaConf" placeholder="Confirme a nova senha" style="width: 100%; padding: 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border);" required>
                <i class="ri-eye-line" id="toggleP2" style="position:absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--text-muted);" onclick="togglePwd('novaSenhaConf', 'toggleP2')"></i>
            </div>'''
            
html_content = html_content.replace(old_first_access, new_first_access)

with codecs.open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)


# 2. Update dashboard.html
dash_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(dash_path, 'r', encoding='utf-8') as f:
    dash_content = f.read()
    
old_dash_pwd = '''            <div class="input-group">
                <i class="ri-lock-line" style="position: absolute; left: 35px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenhaInputDash" placeholder="Nova Senha (min 6 caracteres)" style="width: 100%; padding: 12px 15px 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border); margin-bottom: 15px;" required>
            </div>'''
            
new_dash_pwd = '''            <div class="input-group" style="position:relative; margin-bottom:10px;">
                <i class="ri-lock-line" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenhaInputDash" placeholder="Nova Senha (min 6 chars)" style="width: 100%; padding: 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border);" required>
                <i class="ri-eye-line" id="toggleD1" style="position:absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--text-muted);" onclick="togglePwd('novaSenhaInputDash', 'toggleD1')"></i>
            </div>
            <div class="input-group" style="position:relative; margin-bottom:15px;">
                <i class="ri-lock-line" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenhaInputDashConf" placeholder="Confirme a nova senha" style="width: 100%; padding: 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border);" required>
                <i class="ri-eye-line" id="toggleD2" style="position:absolute; right: 15px; top: 50%; transform: translateY(-50%); cursor: pointer; color: var(--text-muted);" onclick="togglePwd('novaSenhaInputDashConf', 'toggleD2')"></i>
            </div>'''
            
dash_content = dash_content.replace(old_dash_pwd, new_dash_pwd)
with codecs.open(dash_path, 'w', encoding='utf-8') as f:
    f.write(dash_content)

print("HTMLs atualizados com confimração e ícone de olho.")

