import { HavenTestPage } from './app.po';

describe('haven-test App', () => {
  let page: HavenTestPage;

  beforeEach(() => {
    page = new HavenTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
