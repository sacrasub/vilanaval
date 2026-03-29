const supabaseUrl = 'https://jzvoxaqhteqdfyurjlbk.supabase.co';
const supabaseKey = 'sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H';

async function checkTables() {
    try {
        console.log('Verificando tabelas no Supabase...');
        let res = await fetch(`${supabaseUrl}/rest/v1/pnr_history?limit=1`, {
            headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` }
        });
        let json = await res.json();
        console.log('pnr_history:', res.ok ? 'OK (Tabela existe)' : json);
        
        res = await fetch(`${supabaseUrl}/rest/v1/interaction_history?limit=1`, {
            headers: { 'apikey': supabaseKey, 'Authorization': `Bearer ${supabaseKey}` }
        });
        json = await res.json();
        console.log('interaction_history:', res.ok ? 'OK (Tabela existe)' : json);
        
        if (!res.ok) {
            console.log('\nAVISO: As tabelas pnr_history e interaction_history devem ser criadas no painel do Supabase com as colunas adequadas. Até lá, o localStorage será usado como fallback.');
        }
    } catch(e) {
        console.log('Erro de conexão:', e);
    }
}
checkTables();
