import { AggregatePage } from './app.po';

describe('aggregate App', function() {
  let page: AggregatePage;

  beforeEach(() => {
    page = new AggregatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
