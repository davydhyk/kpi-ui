class Boatico {

  constructor(browser) {
    this.browser = browser;
    this.url = 'https://boatico.com';
  }

  async open(url) {
    this.page = await this.browser.openPage(this.url + url);
    return this.page;
  }

  async catalog() {
    const page = await this.open('/boats/');
    return {
      wishlist: async () => {
        await page.waitForSelector('.card-favorite__btn', { visible: true });
        await page.click('.card-favorite__btn');
      },
      isButtonActive: async () => {
        await page.waitForSelector('.card-favorite.active', { visible: true });
      }
    }
  }

  async wishlist() {
    const page = await this.open('/favourite-boats/');
    return {
      listIsNotEmpty: async () => {
        await page.waitForSelector('.card', { visible: true });
        let elements = await page.$('.card');
        expect(elements).toHaveSize(1);
      },
      unWishlist: async () => {
        await page.waitForSelector('.card-favorite.active .card-favorite__btn', { visible: true });
        let elements = await page.click('.card-favorite__btn');
      },
      isButtonInActive: async () => {
        await page.waitForSelector('.card-favorite', { visible: true });
      },
      listIsEmpty: async () => {
        await page.waitForSelector('.card', { visible: true });
        let elements = await page.$('.card');
        expect(elements).toHaveSize(1);
      }
    }
  }

}

module.exports = Boatico;