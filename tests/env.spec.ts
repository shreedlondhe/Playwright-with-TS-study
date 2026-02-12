import { test, expect } from '@playwright/test';

test('read env variable baseurl', async () => {
  const baseurl = process.env.BASEURL || process.env.baseurl;

  console.log(baseurl);

  expect(baseurl, 'Environment variable BASEURL or baseurl must be set').toBeTruthy();
});
