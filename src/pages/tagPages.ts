import { expect, Page, Locator } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrapper';

export default class HeaderPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }


    
}