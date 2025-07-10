import { Page,Locator } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrapper';

export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  async enterUserName(user: string) {
    await this.page.locator("//a[text()='Log in']/ancestor::div/descendant::input[@id='Email']")
	.fill(user);
  }

  async enterPassword(pass: string) {
    await this.page.locator("//a[text()='Log in']/ancestor::div/descendant::input[@id='Password']")
.fill(pass);
  }

  async clickLoginBtn() {
    await this.base.waitAndClick("//a[text()='Log in']/ancestor::div/descendant::input[@class='button-1 login-button']")
  }

  async getSuccessMessage(){
    const expected_email='wsedf@gmail.com';
    const success_msg=this.page.locator("//input[@id='${expected_email}']");
  }

  async getErrorMessageText(): Promise<string> {
    const errorLocator = this.page.locator("//mat-error[@id='mat-mdc-error-0']");
    await errorLocator.waitFor({ state: 'visible' });
    return await errorLocator.textContent() ?? '';
  }
}
