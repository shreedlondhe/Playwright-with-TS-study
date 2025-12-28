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

    //Assertions
    await expect(page.locator('#searchLanguage')).toHaveValue('mg');// to verify value
    await expect(page.locator('#searchLanguage option')).toHaveCount(76);// locator with value


    // Keyboard Actions for Dropdown
    // await page.click('#country');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
})
