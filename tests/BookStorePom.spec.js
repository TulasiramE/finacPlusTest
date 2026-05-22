import { test } from "@playwright/test"
import LoginPage from '../Pages/LoginPage'
import BookStorePage from '../Pages/BookStorePage'
import CredentialsData from "../TestData/LoginData.json"

test('DemoQA Book Store - POM Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const bookStorePage = new BookStorePage(page);
  const BookName = 'Learning JavaScript Design Patterns';

  // Navigate & Login
  await loginPage.goto();
  await loginPage.login(CredentialsData.Username,CredentialsData.Password);
  await loginPage.validateLogin(CredentialsData.Username);
  // Book Store actions
  await bookStorePage.openBookStore();
  await bookStorePage.searchBook(BookName);
  await bookStorePage.validateBook(BookName);
  await bookStorePage.writeBookDetailsToFile(BookName);

  // Logout
  await loginPage.logout();
});
