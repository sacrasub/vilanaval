import codecs
import re

dash_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(dash_path, 'r', encoding='utf-8') as f:
    dash_content = f.read()

# 1. Add showPicker to date and month inputs
dash_content = dash_content.replace('<input type="date"', '<input type="date" onclick="this.showPicker()"')
dash_content = dash_content.replace('<input type="month"', '<input type="month" onclick="this.showPicker()"')

# 2. Add 'Novo Ocupante' button to Admin PNR header
pnr_header_old = '''                            <h3><i class="ri-community-line"></i> Ocupação das PNRs</h3>
                            <div>
                                <span class="badge" id="badgeOcupado"'''
                                
pnr_header_new = '''                            <h3><i class="ri-community-line"></i> Ocupação das PNRs</h3>
                            <div style="display: flex; gap: 10px; align-items: center;">
                                <button class="btn btn-sm btn-primary" onclick="abrirModalNovoMorador()"><i class="ri-user-add-line"></i> Novo Ocupante</button>
                                <span class="badge" id="badgeOcupado"'''

dash_content = dash_content.replace(pnr_header_old, pnr_header_new)

# 3. Rename "Salvar Informações" to "Salvar / Atualizar Dados"
dash_content = dash_content.replace('>Salvar\n                            Informações</button>', '>Salvar / Atualizar Dados</button>')
dash_content = dash_content.replace('>Salvar Informações</button>', '>Salvar / Atualizar Dados</button>')


# 4. Insert Modal html for Novo Ocupante at the bottom of the file before </body>
modal_html = '''
<!-- Modal Novo Morador (Sindico) -->
<div id="modalNovoMorador" class="modal-overlay" style="display:none; z-index: 2000;">
    <div class="modal-content glass-panel" style="max-width: 400px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3>Cadastro Rápido de Morador</h3>
            <i class="ri-close-line" style="cursor:pointer; font-size:1.5rem;" onclick="document.getElementById('modalNovoMorador').style.display='none'"></i>
        </div>
        <form id="formNovoMoradorSindico" onsubmit="salvarMoradorSindico(event)">
            <div class="form-group mb-3">
                <label>NIP</label>
                <input type="text" id="novoMoradorNip" class="form-control" style="width:100%; border-radius:8px; border:1px solid var(--glass-border); padding:10px;" required>
            </div>
            <div class="form-group mb-3">
                <label>Nome Completo</label>
                <input type="text" id="novoMoradorNome" class="form-control" style="width:100%; border-radius:8px; border:1px solid var(--glass-border); padding:10px;" required>
            </div>
            <div class="form-group mb-3">
                <label>Endereço / PNR</label>
                <select id="novoMoradorEndereco" class="form-control" style="width:100%; border-radius:8px; border:1px solid var(--glass-border); padding:10px;" required>
                    <option value="">Selecione...</option>
                    <option value="Ed. SG Lisboa - Apto 101">Ed. SG Lisboa - Apto 101</option>
                    <option value="Ed. SG Lisboa - Apto 102">Ed. SG Lisboa - Apto 102</option>
                    <option value="Ed. SG Lisboa - Apto 103">Ed. SG Lisboa - Apto 103</option>
                    <option value="Ed. SG Lisboa - Apto 104">Ed. SG Lisboa - Apto 104</option>
                    <option value="Ed. SG Lisboa - Apto 105">Ed. SG Lisboa - Apto 105</option>
                    <option value="Ed. SG Lisboa - Apto 106">Ed. SG Lisboa - Apto 106</option>
                    <option value="Ed. SG Lisboa - Apto 201">Ed. SG Lisboa - Apto 201</option>
                    <option value="Ed. SG Lisboa - Apto 202">Ed. SG Lisboa - Apto 202</option>
                    <option value="Ed. SG Lisboa - Apto 203">Ed. SG Lisboa - Apto 203</option>
                    <option value="Ed. SG Lisboa - Apto 204">Ed. SG Lisboa - Apto 204</option>
                    <option value="Ed. SG Lisboa - Apto 205">Ed. SG Lisboa - Apto 205</option>
                    <option value="Ed. SG Lisboa - Apto 206">Ed. SG Lisboa - Apto 206</option>
                    <option value="Ed. SG Lisboa - Apto 301">Ed. SG Lisboa - Apto 301</option>
                    <option value="Ed. SG Lisboa - Apto 302">Ed. SG Lisboa - Apto 302</option>
                    <option value="Ed. SG Lisboa - Apto 303">Ed. SG Lisboa - Apto 303</option>
                    <option value="Ed. SG Lisboa - Apto 304">Ed. SG Lisboa - Apto 304</option>
                    <option value="Ed. SG Lisboa - Apto 305">Ed. SG Lisboa - Apto 305</option>
                    <option value="Ed. SG Lisboa - Apto 306">Ed. SG Lisboa - Apto 306</option>
                    <option value="Casa 01">Casa 01</option>
                    <option value="Casa 02">Casa 02</option>
                    <option value="Casa 03">Casa 03</option>
                    <option value="Casa 04">Casa 04</option>
                    <option value="Casa 05">Casa 05</option>
                    <option value="Casa 06">Casa 06</option>
                    <option value="Casa 07">Casa 07</option>
                    <option value="Casa 08">Casa 08</option>
                    <option value="Casa 09">Casa 09</option>
                    <option value="Casa 10">Casa 10</option>
                    <option value="Casa 11">Casa 11</option>
                    <option value="Casa 12">Casa 12</option>
                    <option value="Casa 13">Casa 13</option>
                    <option value="Casa 14">Casa 14</option>
                    <option value="Casa 15">Casa 15</option>
                    <option value="Casa 16">Casa 16</option>
                    <option value="Casa 17">Casa 17</option>
                    <option value="Casa 18">Casa 18</option>
                    <option value="Casa 19">Casa 19</option>
                </select>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px;">
                A senha provisória de acesso será <strong>marinha123</strong>.
            </p>
            <button type="submit" id="btnSalvarSindico" class="btn btn-primary" style="width:100%;">Salvar</button>
        </form>
    </div>
</div>
'''

if "modalNovoMorador" not in dash_content:
    dash_content = dash_content.replace('</body>', f'{modal_html}\n</body>')

with codecs.open(dash_path, 'w', encoding='utf-8') as f:
    f.write(dash_content)

print("Dashboard modifications complete!")
