const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

// Configuration
const SUPABASE_URL = "https://jzvoxaqhteqdfyurjlbk.supabase.co";
const SUPABASE_KEY = "sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H"; 

function hashPassword(password) {
    if (!password) return "";
    // Check if already hashed (64 hex chars)
    if (password.length === 64 && /^[0-9a-f]+$/i.test(password)) {
        return password.toLowerCase();
    }
    return crypto.createHash('sha256').update(password).digest('hex');
}

async function migrate() {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    
    console.log("Iniciando migração de senhas via Node.js...");
    
    // Fetch all residents
    const { data: moradores, error } = await supabase.from('moradores').select('*');
    
    if (error) {
        console.error("Erro ao buscar moradores:", error);
        return;
    }
    
    let count = 0;
    for (const morador of moradores) {
        const nip = morador.nip;
        const dados = morador.dados || {};
        const senhaAtual = dados.senha;
        
        if (senhaAtual) {
            const novaSenha = hashPassword(senhaAtual);
            if (novaSenha !== senhaAtual) {
                dados.senha = novaSenha;
                const { error: updateError } = await supabase
                    .from('moradores')
                    .update({ dados: dados })
                    .eq('nip', nip);
                
                if (updateError) {
                    console.error(`Erro ao atualizar NIP ${nip}:`, updateError);
                } else {
                    console.log(`Senha migrada para NIP: ${nip}`);
                    count++;
                }
            }
        }
    }
    
    console.log(`Migração concluída! ${count} senhas foram transformadas em hash SHA-256.`);
}

migrate();
