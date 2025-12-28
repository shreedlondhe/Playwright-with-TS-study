import { test, expect, chromium } from '@playwright/test'
import { promises } from 'node:dns';

test('Hanlde tab', async ({ page }) => {
    // const browser=await chromium.launch();
    // const context=await browser.newContext();
    // const page=await context.newPage()
    await page.goto('https://gauravkhurana.in/test-automation-play/');
    await page.locator("//button[@id='radix-:r0:-trigger-advanced']").click()
    const context = page.context();
    // context.waitForEvent('page');
    //parentPage.locator('#buttnClick').click()
    //above two line need to work simultaniouly thats why we are adding in promise array
    const [childPage] = await Promise.all([context.waitForEvent('page'), page.locator("//button[normalize-space()='Open New Window']").click()])

})
test('Hanlde popup window', async ({ page }) => {
    await page.goto('https://gauravkhurana.in/test-automation-play/')
    await page.locator("//button[@id='radix-:r0:-trigger-advanced']").click()
    const context = page.context();
    const [newTab] = await Promise.all([page.waitForEvent('popup'), page.click("//button[normalize-space()='Open New Window']")]);
    console.log(await newTab.title())

})

test('Handle window', async ({ page }) => {
    await page.goto('https://gauravkhurana.in/test-automation-play/')
    await page.locator("//button[@id='radix-:r0:-trigger-advanced']").click()
    await page.locator("//button[normalize-space()='Open New Window']").click()
    const tabs = await page.context().pages()// return array of pages
    console.log(await tabs.length)
    console.log(await tabs[1].locator('p').innerText())// printing from new tab
    await page.locator("//button[@id='radix-:r0:-trigger-advanced']").click()// back to main page


})