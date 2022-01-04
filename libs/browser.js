const puppeteer = require('puppeteer')

class Browser {

  async init(width = 1920, height = 1080) {
    this.width = width;
    this.height = height;
    this.browser = await puppeteer.launch({
      headless: false,
      slowMo: 3,
      channel: 'chrome',
      defaultViewport: {
        width: this.width,
        height: this.height
      }
    });
  }

  async openPage(url) {
    const page = await this.browser.newPage();
    // page.setDefaultTimeout(1000 * 60 * 5);
    await page.setViewport({ width: this.width, height: this.height });
    await page.setUserAgent('KPI-LAB5-TEST');
    await page.goto(url);
    return page
  }

  async close() {
    await this.browser.close();
  }

}


module.exports = Browser;