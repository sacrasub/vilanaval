const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://jzvoxaqhteqdfyurjlbk.supabase.co';
const supabaseKey = 'sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSindico() {
    const { data, error } = await supabase.from('moradores').select('*').eq('nip', 'sindico');
    if (error) {
        console.error("Error fetching sindico:", error);
        return;
    }
    console.log("Sindico Data:", JSON.stringify(data, null, 2));
}

checkSindico();
