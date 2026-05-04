const { expect } = require('@playwright/test');
const fs = require('fs');

class BookStorePage {
  constructor(page) {
    this.page = page;
    this.goToBookStoreButton = page.locator('//button[text()="Go To Book Store"]');
    this.searchBox = page.locator('#searchBox');
  }

  async openBookStore() {
    await this.goToBookStoreButton.click();
  }

  async searchBook(BookName) {
    await this.searchBox.fill(BookName);
  }

  async validateBook(BookName) {
    
  await expect(this.page.getByText(BookName)).toBeVisible();

  }

  async writeBookDetailsToFile(BookName) {

  const row = this.page.locator(`//a[text()="${BookName}"]/ancestor::tr`);

  const title = await row.locator('td:nth-child(2)').innerText();
  const author = await row.locator('td:nth-child(3)').innerText();
  const publisher = await row.locator('td:nth-child(4)').innerText();
    const Iformation = `
Title: ${title}
Author: ${author}
Publisher: ${publisher}
`;

    fs.writeFileSync('book-details.txt', Iformation, 'utf-8');
  }

}
module.exports = BookStorePage;
