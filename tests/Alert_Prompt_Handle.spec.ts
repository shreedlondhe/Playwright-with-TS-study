import {test,expect} from '@playwright/test'
// In built alert is auto dissmissed by playwright
// before clicking the button which generate alert we have to specifiy the alert listner
test('Handle alert with only ok',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.on('dialog',(dailog)=>{
                                console.log(dailog.type()); // to get alert type
                                expect(dailog.type()).toContain('alert');
                                console.log(dailog.message())// to get alert message
                                dailog.accept()
                               // dailog.dismiss()
                                })
await page.waitForSelector('#alertBtn')
await page.locator('#alertBtn').click();


})
test('Handle alert with ok and cancel',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.on('dialog',(dailog)=>{
                                console.log(dailog.type()); // to get alert type
                                expect(dailog.type()).toContain('confirm');
                                console.log(dailog.message())// to get alert message
                                expect(dailog.message()).toBe('Press a button!')// assertion
                                dailog.accept()
                                // dailog.dismiss()
                                })
await page.waitForSelector('#confirmBtn')
await page.locator('#confirmBtn').click();


})

test('Handle prompt',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
await page.on('dialog',(dailog)=>{
                                console.log(dailog.type()); // to get alert type
                                expect(dailog.type()).toContain('prompt');
                                console.log(dailog.message())// to get alert message
                                expect(dailog.message()).toBe('Please enter your name:')// assertion
                                console.log(dailog.defaultValue())// getting default value in prompt text box
                                dailog.accept('xxx')//accept with filling value
                                // dailog.dismiss()
                                })
await page.waitForSelector('#promptBtn')
await page.locator('#promptBtn').click();


})