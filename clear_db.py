import requests

url = "https://jzvoxaqhteqdfyurjlbk.supabase.co/rest/v1/moradores"
headers = {
    "apikey": "sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H",
    "Authorization": "Bearer sb_publishable_hKgmUqtu7Wrfo1A5z0fiUg_xy4pLT9H",
    "Content-Type": "application/json"
}

print("1. Deleting mock residents...")
r_del = requests.delete(f"{url}?nip=not.in.(sindico,sistema)", headers=headers)
print("Delete status code:", r_del.status_code)

print("2. Resetting the 'sistema' row to remove mock events and tickets...")
reset_payload = {
    "dados": {}
}
r_update = requests.patch(f"{url}?nip=eq.sistema", headers=headers, json=reset_payload)
print("Update status code:", r_update.status_code)

print("3. Done. The database is empty except for 'sindico' and 'sistema'!")
