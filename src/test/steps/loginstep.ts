import { Given,When,Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';


 Given('User navigates to the Demowebshop application',{ timeout: 30000 }, async function () {
    const baseUrl = process.env.BASEURL;
    if (!baseUrl) throw new Error('BASEURL environment variable is not defined');
    await pageFixture.page!.goto(baseUrl);
    pageFixture.logger?.info('Navigated to the application');
});  

Given('User clicks on the login link', async function () {
    await pageFixture.headerPage!.loginLink.click();
    pageFixture.logger?.info('Clicked on login link');
 });

Given('I enter {string},{string} in the appropriate field', async function (email, password) {
        await pageFixture.loginPage!.enterUserName(email);
        await pageFixture.loginPage!.enterPassword(password);
});

 Given('I click on the login button', async function () {
         await pageFixture.loginPage!.clickLoginBtn();
});


Then('the login result should be {string} displayed', async function (expectedResult: string) {
//     const valid=pageFixture.loginPage!.getSuccessMessage
//      if(Email.includes('wsedf@gmail.com') && Password.includes(''))
// //     if (Result.includes('wsedf@gmail.com')) {
//     // Success scenario
//       const actual = await pageFixture.loginPage!.getSuccessMessage();
//       expect(actual).toBe(Result);
//       pageFixture.logger?.info(' Login success verified for: ' + Result);
//   } else {
//     // Error scenario
//       const actualError = await pageFixture.loginPage!.getBlanUserError();
//       expect(actualError).toContain(Result); // partial match
//       pageFixture.logger?.info(' Login failure verified: ' + actualError);
//   }
// });
// Then('the login result should be {string}', async function (expectedResult: string) {
  try {
    const page = pageFixture.page!;

    if (expectedResult.includes('@')) {
      const successLocator = page.locator(`//a[text()='${expectedResult}']`);
      await successLocator.waitFor({ state: 'visible', timeout: 10000 });
      const actualText = await successLocator.textContent();
      expect(actualText?.trim()).toBe(expectedResult);
    }
     else if (expectedResult === 'The credentials provided are incorrect') {
      const errorLocator = page.locator("//li[text()='The credentials provided are incorrect']");
      await errorLocator.waitFor({ state: 'visible', timeout: 10000 });
      const actualText = await errorLocator.textContent();
      expect(actualText?.trim()).toBe(expectedResult);
    }
     else if (expectedResult === 'No customer account found') {
      const errorLocator = page.locator("//li[text()='No customer account found']");
      await errorLocator.waitFor({ state: 'visible', timeout: 10000 });
      const actualText = await errorLocator.textContent();
      expect(actualText?.trim()).toBe(expectedResult);
    } 
    else if (expectedResult === 'Please enter a valid email address.') {
      const errorLocator = page.locator("//span[text()='Please enter a valid email address.']");
      await errorLocator.waitFor({ state: 'visible', timeout: 10000 });
      const actualText = await errorLocator.textContent();
      expect(actualText?.trim()).toBe(expectedResult);
    } 
    else {
      throw new Error(`Unexpected result message: ${expectedResult}`);
    }

  } catch (error: any) {
    pageFixture.logger?.error(`Login result verification failed: ${error.message}`);
    throw error;
  }
});

