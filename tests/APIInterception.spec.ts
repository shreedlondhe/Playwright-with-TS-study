import {test,TestInfo} from '@playwright/test'



test('Api Interception',async({page})=>{
    test.setTimeout(60000)
    let testcaseName=test.info().title
    console.log("Test case name is "+testcaseName)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()

  // Method 1
   let res= await  page.waitForResponse('**/api/v2/dashboard/employees/subunit')
  // getting status code of the response
  console.log("Response status is "+res.status())
  // getting value with json path
  console.log("Response status text is "+(await res.json()).data[0].subunit.name)
   //Print all subunit names from the response body by looping through the data array
    for(let i of (await res.json()).data){
        console.log("Subunit name is "+i.subunit.name)
    }
   // print alljson response body
   console.log("Response body is:",JSON.stringify(await res.json(), null, 2));


//    // Method 2
// let responseBody: any;
// page.on('response', async (response) => {
//     if (response.url().includes('/api/v2/dashboard/employees/subunit')) {
//         await page.waitForLoadState('networkidle');
//         responseBody = await response.json();
//         console.log("Response:", await responseBody);
//     }
// });
// // Extract value
// console.log("Data:", await responseBody.data);

})