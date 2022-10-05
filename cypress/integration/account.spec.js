/// <reference types="cypress" />
import HeaderPage from '../pages/header';
import LoginPage from '../pages/login';
import AccountPage from '../pages/account';
import Data from '../fixtures/users.json';

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/'); {

      const header = new HeaderPage();
      const login = new LoginPage();

    if(Cypress.config("viewportWidth")<700) {
    
      header.getOptionsBtnMobile().click();
      header.getMainMenuMobile().select('Login');
    
    } else
  
    header.getLoginRegisterButon().click();
  
    login.getUserInput().type(Data.users[1].user);
    login.getPassInput().type(Data.users[1].password);
    login.getLoginBtn().click();
  }
  })

  it("Visual testing de AccountPage", { tags: "@regression"}, () => {
    const account = new AccountPage();

    account.getBoxManageAddressBook().should("have.css", "background-color", "rgb(57, 145, 219)");
    account.getBoxOrderHistory().should("have.css", "background-color", "rgb(145, 57, 219)");
    account.getBoxDownloads().should("have.css", "background-color", "rgb(217, 219, 57)");
    account.getBoxTransactionHistory().should("have.css", "background-color", "rgb(219, 103, 57)");
  });

})