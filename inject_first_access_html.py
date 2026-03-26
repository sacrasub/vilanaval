import codecs

html_path = r'd:\Estrela\Documents\VilaNaval\index.html'
with codecs.open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

modal_html = '''
    <!-- Modal Primeiro Acesso -->
    <div id="modalMudarSenha" class="modal-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; align-items: center; justify-content: center;">
        <div class="modal-content glass-panel" style="max-width: 400px; text-align: center; padding: 25px; border-radius: 12px; background: rgba(255,255,255,0.9);">
            <h3 style="color: var(--primary-color); margin-bottom: 10px;">Primeiro Acesso</h3>
            <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 0.9rem;">Por medida de segurança, crie uma senha forte e exclusiva para acessar o sistema da Vila Naval.</p>
            <div class="input-group">
                <i class="ri-lock-line" style="position: absolute; left: 35px; top: 50%; transform: translateY(-50%); color: var(--text-muted);"></i>
                <input type="password" id="novaSenha" placeholder="Digite a nova senha" style="width: 100%; padding: 12px 15px 12px 40px; border-radius: 8px; border: 1px solid var(--glass-border); margin-bottom: 15px;" required>
            </div>
            <button id="btnSalvarSenha" class="btn btn-primary" style="width: 100%; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none;">Salvar e Acessar</button>
        </div>
    </div>
'''

if "modalMudarSenha" not in html_content:
    html_content = html_content.replace('</body>', modal_html + '\n</body>')
    with codecs.open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    print("Modal injected into HTML.")

