import asyncio
from playwright.async_api import async_playwright

async def test_sindico_login():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        alerts = []
        page.on("dialog", lambda dialog: alerts.append(dialog.message))
        
        print("Opening index.html...")
        await page.goto('file:///d:/Estrela/Documents/VilaNaval/index.html')
        
        print("Waiting for Supabase to load...")
        await page.wait_for_timeout(2000)
        
        # Test default password 'sindico'
        print("\nTest 1: Trying password 'sindico'")
        await page.fill('#nip', 'sindico')
        await page.fill('#senha', 'sindico')
        await page.click('button[type="submit"]')
        
        await page.wait_for_timeout(2000)
        if alerts:
            print(f"Alert shown: {alerts[-1]}")
        else:
            url = page.url
            print(f"No alert! Redirected to: {url}")
            
        alerts.clear()
        
        # Go back if redirected
        if 'dashboard.html' in page.url:
            await page.goto('file:///d:/Estrela/Documents/VilaNaval/index.html')
            await page.wait_for_timeout(1000)
            
        print("\nTest 2: Trying password 'S!nd!c0'")
        await page.fill('#nip', 'sindico')
        await page.fill('#senha', 'S!nd!c0')
        await page.click('button[type="submit"]')
        
        await page.wait_for_timeout(2000)
        if alerts:
            print(f"Alert shown: {alerts[-1]}")
        else:
            url = page.url
            print(f"No alert! Redirected to: {url}")


        # Capture a screenshot to see state
        await page.screenshot(path='test_sindico_form.png')
        
        # Lets see what exactly Supabase returns in console
        print("\nManually checking Supabase directly in js:")
        res = await page.evaluate('''async () => {
            if (!window._supabase) return "No supabase instance";
            const { data, error } = await window._supabase.from('moradores').select('dados').eq('nip', 'sindico');
            return { data, error };
        }''')
        print("Supabase raw response:", res)

        await browser.close()

asyncio.run(test_sindico_login())
