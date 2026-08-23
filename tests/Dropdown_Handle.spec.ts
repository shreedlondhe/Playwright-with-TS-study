import { test, expect, Locator } from '@playwright/test'

test('Handle dropdown2', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/')
    await page.locator('#searchLanguage').selectOption('Asturianu') //select by visible text
    await page.selectOption('#searchLanguage', { value: 'az' })//Another type to select dropdown
    await page.locator('#searchLanguage').selectOption({ value: 'da' }) // select by value
    await page.locator('#searchLanguage').selectOption({ index: 1 }) // select by index
    await page.locator('#searchLanguage').selectOption({ label: 'Dansk' }) // select by label
    //await page.selectOption('#countries', ['IN', 'US']);   Select multiple options

    //  Count options
    const count = await page.locator("//select[@id='searchLanguage']/option").count();
    console.log(count);

    // select from dropdown by iteration approch 1
    let dropdownoptions: Locator[] = await page.locator("//select[@id='searchLanguage']/option").all();// all used to get all locator in array
    for (let value of dropdownoptions) {
        if (await value.innerText() === 'Malagasy') {
            await page.locator('#searchLanguage').selectOption({ label: 'Malagasy' })
            break;
        }
    }
    // iteration approch 2 usning $$
    let option = await page.$$('#searchLanguage option');// with the help of $$ we can get multiple element
    console.log('Length is ', option.length)// 
    await expect(option.length).toBe(76)


    //Get all values
    const options: string[] = await page.locator('#searchLanguage option').allTextContents();// choose locator with options
    console.log(options);

    // Get selected value
    const selectedValue = await page.locator('#searchLanguage').inputValue();
    console.log(selectedValue);

    // get all the options of the dropdown : 1st method
    let option_s=await page.locator("#searchLanguage option").all()
    for(let i of option_s){
     console.log(await i.textContent())
     }

    // get all the options of the dropdown : 1st method
    let option__s=await page.locator("#searchLanguage option").allTextContents()
    for(let i of option__s){
     console.log(i)
     }
    //  select first and last option from dropdown
    let lastOptions:any =await option_s[option_s.length-1].textContent()
    await page.locator("#searchLanguage").selectOption({label:lastOptions})// select the last option
    let firstOption:any =await option_s[0].textContent()
    await page.locator("#searchLanguage").selectOption({label:firstOption})// select the first option

   //second method to print last option
   let allCount=await page.locator("#searchLanguage option").count()
   await page.locator("#searchLanguage").selectOption({index:allCount-1})// select the last option
    await page.locator("#searchLanguage").selectOption({index:0})// select the first option

   //third method to get first asn last option
    let option__s_=await page.locator("#searchLanguage option").allTextContents()
    await page.locator("#searchLanguage").selectOption({label:await option__s_[option__s_.length-1]})// select last option
     await page.locator("#searchLanguage").selectOption({label:await option__s_[0]})// select first option


    //Assertions
    await expect(page.locator('#searchLanguage')).toHaveValue('mg');// to verify value
    await expect(page.locator('#searchLanguage option')).toHaveCount(76);// locator with value


    // Keyboard Actions for Dropdown
    // await page.click('#country');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
})
