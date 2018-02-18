import { AppPage } from './app.po';

describe('angular5-canvas-painter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
  });
});
