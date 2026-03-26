import os
import codecs

html_path = r'd:\Estrela\Documents\VilaNaval\dashboard.html'
with codecs.open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Make the Relatorio do Sindico button navigate instead of alert
content = content.replace("alert('Funcionalidade Relatório H: Exportação do Síndico...')", "document.querySelector('[data-target=\\'relatorio-sindico\\']').click()")

# Inject the hidden tab logic for relatorio-sindico at the end of content-area
relatorio_html = '''
                <!-- Admin: Relatório do Síndico -->
                <section id="relatorio-sindico" class="tab-pane">
                    <div class="card glass-panel" id="relatorio-h">
                        <div class="card-header" style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                            <h3><i class="ri-file-chart-line"></i> Relatório Mensal do Síndico (Anexo H)</h3>
                            <button class="btn btn-sm btn-outline" onclick="window.printSection('relatorio-h')"><i class="ri-printer-line"></i> Imprimir</button>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group mb-3">
                                    <label>Mês de Referência</label>
                                    <input type="month" class="form-control" style="width:100%; border-radius:8px; border:1px solid #e2e8f0; padding:10px;" required>
                                </div>
                                
                                <h4>1. PNRs Verificadas e Condições</h4>
                                <table style="width:100%; border-collapse:collapse; margin-bottom: 20px;">
                                    <tr style="background:#f7fafc; text-align:left;">
                                        <th style="padding:10px; border-bottom:1px solid #cbd5e1;">PNR</th>
                                        <th style="padding:10px; border-bottom:1px solid #cbd5e1;">Status</th>
                                        <th style="padding:10px; border-bottom:1px solid #cbd5e1;">Observações</th>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px; border-bottom:1px solid #edf2f7;">Ed. SG Lisboa - Apto 101</td>
                                        <td style="padding:10px; border-bottom:1px solid #edf2f7;"><span class="badge" style="background:#c6f6d5; color:#22543d;">Vistoriado</span></td>
                                        <td style="padding:10px; border-bottom:1px solid #edf2f7;"><input type="text" placeholder="Sem alterações" style="width:100%; border:none; background:transparent;"></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:10px; border-bottom:1px solid #edf2f7;">Casa 01</td>
                                        <td style="padding:10px; border-bottom:1px solid #edf2f7;"><span class="badge" style="background:#fed7d7; color:#c53030;">Problema Identificado</span></td>
                                        <td style="padding:10px; border-bottom:1px solid #edf2f7;"><input type="text" value="Pintura descascando na fachada" style="width:100%; border:none; background:transparent;"></td>
                                    </tr>
                                </table>
                                
                                <h4>2. Áreas Comuns</h4>
                                <div class="form-group mb-3">
                                    <textarea rows="3" style="width:100%; border-radius:8px; border:1px solid #e2e8f0; padding:10px;" placeholder="Relate o estado do Clube, salão de festas e áreas recreativas..."></textarea>
                                </div>
                                
                                <h4>3. Ocorrências Excepcionais</h4>
                                <div class="form-group mb-3">
                                    <textarea rows="3" style="width:100%; border-radius:8px; border:1px solid #e2e8f0; padding:10px;" placeholder="Relate quebras de regra, intervenções urgentes ou atividades anômalas..."></textarea>
                                </div>
                                
                                <button type="button" class="btn btn-primary" style="width:100%;" onclick="alert('Relatório Salvo no Sistema. (Mock)')"><i class="ri-save-line"></i> Salvar e Assinar Relatório</button>
                            </form>
                        </div>
                    </div>
                </section>
'''
# Find where content-area closes
insert_idx = content.find('<!-- Modals -->')
if insert_idx != -1:
    content = content[:insert_idx] + relatorio_html + '\n' + content[insert_idx:]

with codecs.open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Relatorio do Sindico implemented.')
