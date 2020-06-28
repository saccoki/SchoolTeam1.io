import { SchoolTeamPage } from './app.po';

describe('school-team App', function() {
  let page: SchoolTeamPage;

  beforeEach(() => {
    page = new SchoolTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
