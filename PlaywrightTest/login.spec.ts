import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('login test', async({page})=>{
    // const browser:Browser = await chromium.launch({headless: false});
    // const page:Page = await browser.newPage();
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    const emailID:Locator = await page.locator('#input-email');
    const password:Locator = await page.locator('#input-password');
    const loginBtn:Locator = await page.locator("[value='Login']");

    emailID.fill("testQAtest@gmail.com");
    password.fill("Test@123");
    loginBtn.click();
    const title = await page.title();
    console.log("Login page title: ", title);
    await page.screenshot({path: 'loginpage.png'});
    expect(title).toEqual('Account Login');
    console.log("Login test completed successfully!");

} );