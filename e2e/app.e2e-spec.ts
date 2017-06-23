import { PlacementPortalPage } from './app.po';

describe('placement-portal App', () => {
  let page: PlacementPortalPage;

  beforeEach(() => {
    page = new PlacementPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
