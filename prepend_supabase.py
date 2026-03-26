import codecs

js_path = r'd:\Estrela\Documents\VilaNaval\script.js'
with codecs.open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

init_block = '''// SUPABASE INITIALIZATION
const supabaseUrl = 'https://jzvoxaqhteqdfyurjlbk.supabase.co';
const supabaseKey = 'sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H';
window._supabase = window.supabase ? window.supabase.createClient(supabaseUrl, supabaseKey) : null;

'''

if "SUPABASE INITIALIZATION" not in js_content:
    js_content = init_block + js_content
    with codecs.open(js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Supabase Init Prependido no script.js")
