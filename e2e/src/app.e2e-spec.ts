import { browser, element, by } from 'protractor';

describe('Router basic tutorial e2e tests', () => {

  beforeEach(() => browser.get(''));

  it('should display Angular with Webix complex widgets', async () => {
    expect(await element(by.css('h1')).getText()).toBe('Angular with Webix complex widgets');
  });
});
