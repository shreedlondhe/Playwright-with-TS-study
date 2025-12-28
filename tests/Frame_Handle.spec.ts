import { test, expect } from '@playwright/test'

test('Handle fram approach 1 using frame', async ({ page }) => {
    await page.goto('https://gauravkhurana.in/test-automation-play/');
    await page.locator("//button[@id='radix-:r0:-trigger-advanced']").click();
    const frame = await page.frame({ url: 'data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%3E%3Cp%3EThis%20is%20content%20inside%20an%20iframe%3C/p%3E%3Cbutton%20id%3D%22iframe-button%22%3EiFrame%20Button%3C/button%3E%3C/body%3E%3C/html%3E' })
    //const frame=await page.frame("iframe[title='Test iFrame']");// getting frame with another locator
    const text = await frame?.locator('p').innerText();// p is element inside the frame
    // used '?' cause above line show comple time error cause there may be possibility where frame is no present and will get error so to handle this used '?' or we need to use if else block
    console.log(text)
    const childFrames = frame?.childFrames();// method to get all child frame and this return array so we can perorm operation on them like childFrames[1].locator('p')....
    console.log(childFrames?.length)
    //getting frame count
    let frameCount = await page.locator('iframe').count();
    await expect(frameCount).toBe(2)


})

test('Hanlde Frmae approach 2 using framelocator', async ({ page }) => {
    await page.goto('https://gauravkhurana.in/test-automation-play/');
    await page.locator("//button[@id='radix-:r0:-trigger-advanced']").click();
    const textFromFrame = await page.frameLocator("//iframe[@data-testid='single-iframe']").locator('p').innerText();
    console.log(textFromFrame)
    // To handle nested frame use below format
    //await page.frameLocator('#parentFrame').frameLocator('#childFrame').locator('#submit').click();

})