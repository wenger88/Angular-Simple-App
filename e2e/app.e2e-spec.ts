import { BeekeeperPage } from './app.po';

describe('beekeeper App', function() {
  let page: BeekeeperPage;

  beforeEach(() => {
    page = new BeekeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
