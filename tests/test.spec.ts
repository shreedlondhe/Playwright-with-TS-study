import {test,expect} from '@playwright/test'
import { exitCode } from 'node:process';

test('handle popup',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

expect(page).toHaveURL(await page.url())
expect(page).toHaveTitle(await page.title())




})