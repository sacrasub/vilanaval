import codecs
import re

dash_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(dash_path, 'r', encoding='utf-8') as f:
    dash_content = f.read()

# Add empty form button
old_btns = '''<button class="btn btn-sm btn-primary" onclick="abrirModalNovoMorador()"><i class="ri-user-add-line"></i> Novo Ocupante</button>'''
new_btns = '''<button class="btn btn-sm btn-primary" onclick="abrirModalNovoMorador()"><i class="ri-user-add-line"></i> Novo</button>
<button class="btn btn-sm btn-outline" onclick="imprimirFichaCadastro()"><i class="ri-printer-line"></i> Ficha Vazia</button>'''
dash_content = dash_content.replace(old_btns, new_btns)

with codecs.open(dash_path, 'w', encoding='utf-8') as f:
    f.write(dash_content)

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Add print button to renderMoradores
old_render_btn = '''<button class="btn btn-sm btn-outline" style="width:100%; margin-top:10px;" onclick="resetarSenhaMorador('', '')"><i class="ri-restart-line" style="color:var(--warning);"></i> Restaurar Senha Local</button>'''
new_render_btn = '''<button class="btn btn-sm btn-outline" style="width:100%; margin-top:10px; display:flex; justify-content:center; gap:5px;" onclick="resetarSenhaMorador('', '')"><i class="ri-restart-line" style="color:var(--warning);"></i> Resetar Senha</button>
                    <button class="btn btn-sm btn-outline" style="width:100%; margin-top:5px; display:flex; justify-content:center; gap:5px;" onclick="imprimirFichaCadastro('')"><i class="ri-file-user-line" style="color:var(--primary);"></i> Emitir Ficha</button>'''
js_content = js_content.replace(old_render_btn, new_render_btn)


# Append the global Print Function
print_logic = '''
window.imprimirFichaCadastro = async function(nipTarget = null) {
    let dados = {};
    if(nipTarget && window._supabase) {
        const { data } = await window._supabase.from('moradores').select('dados').eq('nip', nipTarget);
        if(data && data.length > 0) {
            dados = data[0].dados || {};
        }
    }
    
    // Safely get properties
    const safeGet = (key) => dados[key] ? String(dados[key]).toUpperCase() : '';
    const defBool = (key, expected) => dados[key] === expected ? '( X )' : '(   )';
    
    const printWindow = window.open('', '_blank');
    if(!printWindow) return alert('Autorize popups neste site para gerar o PDF.');
    
    const html = 
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Ficha de Cadastro - Vila Naval</title>
        <style>
            @page { size: A4; margin: 20mm; }
            body { font-family: 'Arial', sans-serif; color: #000; line-height: 1.4; margin:0; padding:0; }
            .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
            .header img { max-height: 80px; }
            .header h1 { font-size: 16pt; margin: 5px 0 0 0; text-transform: uppercase; }
            h2 { font-size: 12pt; background-color: #f0f0f0; border: 1px solid #000; padding: 5px; margin-top: 20px; }
            .row { display: flex; flex-wrap: wrap; margin-bottom: 10px; }
            .field { flex: 1; padding: 0 5px; }
            .field-label { font-weight: bold; font-size: 9pt; }
            .field-value { border-bottom: 1px solid #000; padding: 3px 0; min-height: 20px; font-size: 11pt; text-transform: uppercase; }
            .box { border: 1px solid #000; padding: 10px; margin-bottom: 10px; }
            .obs { font-size: 8pt; font-style: italic; margin-top: 30px; text-align: justify;}
            
            .signature { margin-top: 50px; text-align: center; width: 100%; display: flex; justify-content: space-around;}
            .sig-line { border-top: 1px solid #000; width: 40%; padding-top: 5px; font-size: 10pt; }
        </style>
    </head>
    <body onload="window.print(); window.onafterprint = function(){ window.close(); }">
        <div class="header">
            <!-- You can inject the literal encoded logo here or let it be text -->
            <h1>MARINHA DO BRASIL</h1>
            <h2>Vila Naval de Tabatinga (APVNT) - Ficha de Cadastro/Atualização</h2>
        </div>
        
        <h2>DADOS DO PERMISSIONÁRIO (TITULAR)</h2>
        <div class="box">
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">NOME COMPLETO:</div><div class="field-value"></div></div>
                <div class="field" style="flex: 1;"><div class="field-label">POSTO/GRADUAÇÃO:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">NIP:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">CPF:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">DATA NESCIMENTO:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field" style="flex: 1;"><div class="field-label">ENDEREÇO NA APVNT (PNR):</div><div class="field-value"></div></div>
            </div>
        </div>
        
        <h2>DADOS DOS DEPENDENTES / AGREGADOS</h2>
        <div class="box">
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">1. NOME DO DEPENDENTE:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">GRAU DE PARENTESCO:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">TELEFONE:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">DATA DE NASCIMENTO:</div><div class="field-value"></div></div>
            </div>
            <div class="row mt-2">
                <div class="field"><div class="field-label">OUTROS DEPENDENTES:</div><div class="field-value" style="min-height: 40px;"></div></div>
            </div>
        </div>
        
        <h2>ANIMAIS DE ESTIMAÇÃO NO PNR</h2>
        <div class="box">
            <div class="row">
                <div class="field"><div class="field-label">POSSUI ANIMAL?</div><div style="font-size:11pt; padding:5px 0;">  SIM &nbsp;&nbsp;  NÃO</div></div>
                <div class="field"><div class="field-label">ESPÉCIE:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field" style="flex: 2;"><div class="field-label">NOME DO ANIMAL:</div><div class="field-value"></div></div>
                <div class="field"><div class="field-label">RAÇA/PORTE:</div><div class="field-value"></div></div>
            </div>
            <div class="row">
                <div class="field"><div class="field-label">VACINAS EM DIA?</div><div style="font-size:11pt; padding:5px 0;">  SIM &nbsp;&nbsp;  NÃO </div></div>
            </div>
        </div>
        
        <p class="obs">
            Atesto sob as penas da lei e dos regulamentos militares a veracidade das informações ora prestadas, e comprometo-me a informar à Prefeitura da Vila Naval (Sistema APVNT) quaisquer atualizações ocorridas.
        </p>
        
        <div class="signature">
            <div class="sig-line">Local e Data</div>
            <div class="sig-line">Assinatura do Permissionário</div>
        </div>
    </body>
    </html>
    ;
    printWindow.document.write(html);
    printWindow.document.close();
}
'''
if "window.imprimirFichaCadastro" not in js_content:
    js_content += "\n" + print_logic

with codecs.open(js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
print("Ficha Cadastro appended successfully!")
