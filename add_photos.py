import os
import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8', errors='ignore') as f:
    js_content = f.read()

# Replace block in renderMoradores
old_html = '''            html += 
            <div class="pnr-card ocupado" style="position:relative;">
                <div class="pnr-title"><i class="ri-home-4-fill"></i> </div>
                <p class="pnr-details">Perm:  </p>
                <p class="pnr-details"><i class="ri-group-line"></i>  | <i class="ri-github-fill"></i> </p>
                <button class="btn btn-sm btn-outline mt-2" onclick="alert('Funcionalidade Editar Morador: NIP ' + '')" style="width:100%; border: 1px solid #1a73e8; color: #1a73e8; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;"><i class="ri-pencil-line"></i> Editar</button>
            </div>
            ;'''

new_html = '''            let fotoKey = 'foto_' + data.dadosPessoais.nip;
            let fotoUrl = localStorage.getItem(fotoKey) || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(data.dadosPessoais.nomeCompleto) + '&background=ebf8ff&color=2b6cb0';
            html += 
            <div class="pnr-card ocupado" style="position:relative;">
                <div class="pnr-title"><i class="ri-home-4-fill"></i> </div>
                <div style="display:flex; align-items:center; gap: 10px; margin-top:5px; margin-bottom:5px;">
                    <label style="cursor:pointer;" title="Clique para alterar foto">
                        <img src="" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:2px solid #e2e8f0;">
                        <input type="file" accept="image/*" style="display:none;" onchange="window.uploadFotoPNR('', this)">
                    </label>
                    <div>
                        <p class="pnr-details" style="margin:0; font-weight:bold; cursor:pointer;" onclick="alert('Funcionalidade Editar Morador: NIP ' + '')"> </p>
                        <p class="pnr-details" style="margin:0;"><i class="ri-group-line"></i>  | <i class="ri-github-fill"></i> </p>
                    </div>
                </div>
                <button class="btn btn-sm btn-outline mt-2" onclick="alert('Funcionalidade Editar Morador: NIP ' + '')" style="width:100%; border: 1px solid #1a73e8; color: #1a73e8; background: transparent; cursor: pointer; padding: 5px; border-radius: 5px;"><i class="ri-pencil-line"></i> Editar Completo</button>
            </div>
            ;'''

if old_html in js_content:
    js_content = js_content.replace(old_html, new_html)

upload_js = '''
window.uploadFotoPNR = function(nip, input) {
    if(input.files && input.files[0]) {
        if(input.files[0].size > 3000000) {
            alert('A imagem é muito grande. Escolha uma foto menor que 3MB.');
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('foto_' + nip, e.target.result);
            renderMoradores();
        };
        reader.readAsDataURL(input.files[0]);
    }
}
'''

if 'window.uploadFotoPNR' not in js_content:
    js_content += "\n" + upload_js

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print('PNR edit photos implemented.')
