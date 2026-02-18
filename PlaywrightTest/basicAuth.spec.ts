import {test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('auth test', async({page})=>{

    const username = 'admin';
    const password = 'admin';
    const authHeader = 'Basic ' + btoa(username+':'+password);
    page.setExtraHTTPHeaders({Authorization : authHeader});

    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    // await new Promise(() => {}); // prevents script from exiting!

});