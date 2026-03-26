import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

mask_logic = '''
// Global Input Mask for NIP (00.0000.00)
document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'nip') {
        let val = e.target.value;
        
        // Se a pessoa estiver digitando letras (ex: "sindico"), ignora a mascara de numeros
        if (/[A-Za-z]/.test(val)) return;
        
        // Aplica a mascara 00.0000.00
        let numbers = val.replace(/\D/g, '');
        if (numbers.length > 0) {
            let x = numbers.match(/(\d{0,2})(\d{0,4})(\d{0,2})/);
            if (x) {
                e.target.value = !x[2] ? x[1] : x[1] + (x[2] ? '.' + x[2] : '') + (x[3] ? '.' + x[3] : '');
            }
        }
    }
});
'''

if "Global Input Mask for NIP" not in js_content:
    js_content += mask_logic
    with codecs.open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Mask logic added successfully.")
else:
    print("Mask logic already exists.")
