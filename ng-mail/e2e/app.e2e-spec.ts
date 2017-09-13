import { NgMailPage } from './app.po';

describe('ng-mail App', () => {
  let page: NgMailPage;

  beforeEach(() => {
    page = new NgMailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
