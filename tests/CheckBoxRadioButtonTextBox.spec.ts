import {test,expect,Locator } from '@playwright/test'

test('To verify radio button ',async ({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const maleRadioButton= page.locator('#male'); // unable to give type to varibale cause version issue
await maleRadioButton.waitFor({ state: 'visible' });
await maleRadioButton.waitFor({ state: 'attached' });
await maleRadioButton.check() // or can use await maleRadioButton.click()
// check status of checkbox
console.log(await maleRadioButton.isVisible());
console.log(await maleRadioButton.isEnabled());
console.log(await maleRadioButton.isDisabled());
console.log(await maleRadioButton.isHidden());
console.log(await maleRadioButton.isChecked());// print true or false
// Assertions on check boxes
//excepct(await maleRadio).toBeChecked(); // can't use playwright inbuilt locator in expect cause this need Locator
await expect(maleRadioButton).toBeChecked()
await expect(maleRadioButton).toBeVisible();
await expect(maleRadioButton).toBeEnabled();
//await expect(maleRadioButton).toBeDisabled();   

})

test('To verify checkbox',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
let Sunday_checkBox=page.locator('#sunday');
let Monday_checkBox=page.locator('@Monday');
await Sunday_checkBox.check();
//state of element
console.log(await Sunday_checkBox.isVisible())
console.log(await Sunday_checkBox.isEnabled())
console.log(await Sunday_checkBox.isDisabled())
console.log(await Sunday_checkBox.isHidden())
console.log(await Sunday_checkBox.isChecked())
//Assertions
await expect(Sunday_checkBox).toBeChecked()
await expect(Sunday_checkBox).toBeVisible();
await expect(Sunday_checkBox).toBeEnabled();

})

test('To handle textbox',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let Name_TextBox=page.locator('#name');
    await Name_TextBox.fill('Shrinivas');//Clears existing value and types new text.
    await Name_TextBox.clear();
    await Name_TextBox.type('Londhe');// does NOT clear existing text
    await Name_TextBox.press('Enter');// keyboard enter
    await Name_TextBox.focus();
    const value = await Name_TextBox.inputValue();
console.log(value);
console.log(await Name_TextBox.isEditable())
//Assertions
await expect(Name_TextBox).toHaveValue('Londhe');
// await expect(txtName).toBeEmpty();
// await expect(txtName).not.toBeEmpty();
// await expect(txtName).toBeVisible();
// await expect(txtName).toBeEditable();
// await expect(txtName).toHaveAttribute('placeholder', 'Enter your name');

})

test('To Verfiy click',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const maleRadioButton= page.locator('#male'); // unable to give type to varibale cause version issue
await maleRadioButton.waitFor({ state: 'visible' });
await maleRadioButton.isVisible();
await maleRadioButton.click()
await maleRadioButton.dblclick();
await maleRadioButton.click({ button: 'right' });
await maleRadioButton.click({ force: true });//Ignores visibility & overlays.

})