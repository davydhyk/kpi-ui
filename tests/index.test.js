const Browser = require('../libs/browser');
const Boatico = require('../libs/boatico');
const timeout = 80000;

describe(
  'Testing functionality:',
  () => {
    const browser = new Browser();
    const boatico = new Boatico(browser);

    beforeAll(async () => {
      await browser.init();
    }, timeout);

    it('Check adding to wishlist', async() => {
      const boaticoCatalog = await boatico.catalog();
      await reporter.description('Testing wishlist button');

      await reporter.startStep('Click on wishlist button');
      boaticoCatalog.wishlist();
      await reporter.endStep();

      await reporter.startStep('Check button is active');
      boaticoCatalog.isButtonActive();
      await reporter.endStep();
    }, timeout);

    it('Check wishlist functionalities', async() => {
      const boaticoWishlist = await boatico.wishlist();
      await reporter.description('Testing wishlist functionalities');

      await reporter.startStep('Check if list is not empty');
      boaticoWishlist.listIsNotEmpty();
      await reporter.endStep();

      await reporter.startStep('Click on wishlist button');
      boaticoWishlist.unWishlist();
      boaticoWishlist.isButtonInActive();
      await reporter.endStep();

      await reporter.startStep('Check button is active');
      boaticoWishlist.listIsEmpty();
      await reporter.endStep();
    }, timeout);

    afterAll(async () => {
      await browser.close();
    }, timeout);
  }, timeout
);