import { test } from "@playwright/test"
import LoginPage from '../PageObject/LoginPage'
import BookStorePage from '../PageObject/BookStorePage'
import loginData from "../TestData/LoginData.json"

test('DemoQA Book Store validation', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const bookStorePage = new BookStorePage(page);
  const BookName = 'Learning JavaScript Design Patterns';
  //navigation start
  await loginPage.goto();
  await loginPage.login(loginData.Username,loginData.Password);
  await loginPage.validateLogin(loginData.Username);
  // book store action here
  await bookStorePage.openBookStore();
  await bookStorePage.searchBook(BookName);
  await bookStorePage.validateBook(BookName);
  await bookStorePage.writeBookDetailsToFile(BookName);
  //logout action
  await loginPage.logout();
});
