import {test,TestInfo} from '@playwright/test'



test('Api mockling',async({page})=>{
    test.setTimeout(60000)
    let testcaseName=test.info().title
    console.log("Test case name is "+testcaseName)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()

    await page.route('**/api/v2/dashboard/employees/subunit',(route)=>{
        route.fulfill({
            status:200,
            contentType:'application/json',
            json: {
    "data": [
        {
            "subunit": {
                "id": 3,
                "name": "shree"
            },
            "count": 2
        },
        {
            "subunit": {
                "id": 13,
                "name": "Londhe"
            },
            "count": 2
        },
        {
            "subunit": {
                "id": 2,
                "name": "QA"
            },
            "count": 1
        },
        {
            "subunit": {
                "id": 10,
                "name": "QA Team"
            },
            "count": 1
        }
    ],
    "meta": {
        "otherEmployeeCount": 0,
        "unassignedEmployeeCount": 235,
        "totalSubunitCount": 4
    },
    "rels": []
}
        })
    })

test.info().annotations.push({type:'Bug',description:'This is bug annotation'})
let testStatus=test.info().status
console.log("Test status is "+testStatus)
await page.waitForTimeout(5000)

})