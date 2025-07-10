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


Then('the login result should be {string} displayed', async function (string) {

         
});
