import os
import codecs

css_path = r'd:\Estrela\Documents\VilaNaval\styles.css'
with codecs.open(css_path, 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

append_css = '''

@media print {
    body {
        background-color: white !important;
        background-image: none !important;
    }
    .sidebar, .top-header, .header-actions, .btn, button, .fab-button {
        display: none !important;
    }
    .main-content {
        margin-left: 0 !important;
        width: 100% !important;
    }
    .tab-pane {
        display: none !important;
    }
    .tab-pane.print-active {
        display: block !important;
        page-break-inside: avoid;
    }
    .card.glass-panel {
        box-shadow: none !important;
        border: 1px solid #000 !important;
        break-inside: avoid;
    }
    /* Expand kanban for print */
    .kanban-board {
        display: block;
    }
    .kanban-column {
        page-break-inside: avoid;
        margin-bottom: 20px;
    }
}
'''
if '@media print' not in content:
    with codecs.open(css_path, 'a', encoding='utf-8') as f:
        f.write(append_css)
    print('CSS applied.')
else:
    print('CSS already exists.')
