import supabase
import hashlib
import json

# Configuration
SUPABASE_URL = "https://jzvoxaqhteqdfyurjlbk.supabase.co"
SUPABASE_KEY = "sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H" # This is a service role key in theory, but I'll use the one provided. 
# WARNING: Usually we need the SERVICE_ROLE_KEY to bypass RLS for migration.
# I will check if I can use the provided key or if I need to ask the user.

def hash_password(password):
    if not password:
        return ""
    # Check if already hashed (64 hex chars)
    if len(password) == 64 and all(c in '0123456789abcdefABCDEF' for c in password):
        return password.lower()
    return hashlib.sha256(password.encode('utf-8')).hexdigest()

def migrate():
    client = supabase.create_client(SUPABASE_URL, SUPABASE_KEY)
    
    print("Iniciando migração de senhas...")
    
    # Fetch all residents
    response = client.table("moradores").select("*").execute()
    moradores = response.data
    
    count = 0
    for morador in moradores:
        nip = morador.get("nip")
        dados = morador.get("dados") or {}
        
        senha_atual = dados.get("senha")
        
        if senha_atual:
            nova_senha = hash_password(senha_atual)
            if nova_senha != senha_atual:
                dados["senha"] = nova_senha
                client.table("moradores").update({"dados": dados}).eq("nip", nip).execute()
                print(f"Senha migrada para NIP: {nip}")
                count += 1
    
    print(f"Migração concluída! {count} senhas foram transformadas em hash SHA-256.")

if __name__ == "__main__":
    migrate()
