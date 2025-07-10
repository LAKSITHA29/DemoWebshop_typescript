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
    const success_msg=this.page.locator("//a[@class='account' and text()='${expected_email']");
    await success_msg.waitFor({ state: "visible",timeout: 5000  });
    return (await success_msg.textContent())?.trim() ?? '';
  }

  async getBlanUserError(): Promise<string>{
    const blank_email=this.page.locator("//div[@class='validation-summary-errors']//ul");
    await blank_email.waitFor({ state: 'visible',timeout: 5000  });
    return await blank_email.textContent() ?? '';
  }


}
