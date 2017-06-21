import { PLACITOPage } from './app.po';

describe('placito App', () => {
  let page: PLACITOPage;

  beforeEach(() => {
    page = new PLACITOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
