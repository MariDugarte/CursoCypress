/// <reference types="cypress" />
import HeaderPage from '../pages/header';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import Data from '../fixtures/users.json';
import Account from '../pages/account';

describe('example to-do app', () => {
  beforeEach(() => {
     //cy.viewport('iphone-se2')
    cy.visit('https://automationteststore.com/')
  })

  it('Login Fail - Wrong user & pass', { tags: ["@smoke", "@regression"]}, () => {
   const header = new HeaderPage;
   const login = new LoginPage;

if(Cypress.config("viewportWidth")<700) {

  header.getOptionsBtnMobile().click();
  header.getMainMenuMobile().select('Login');

} else

   header.getLoginRegisterButon().click();

   login.getUserInput().type('HolaMundo');
   login.getPassInput().type('HolaMundo');
   login.getLoginBtn().click();

   login.getAlertBox().should("contain.text", "Error: Incorrect login or password provided.");

  });

  it("Visual testing de Login", { tags: ["@smoke", "@regression"]}, () => {
    const header = new HeaderPage();
    const login = new LoginPage();

    if(Cypress.config("viewportWidth")<700) {

      header.getOptionsBtnMobile().click();
      header.getMainMenuMobile().select('Login');
    
    } else

    header.getLoginRegisterButon().click();
    login.getUserInput().should("have.css", "border-bottom-left-radius", "0px");
  });


  it('Login OK Mari', { tags: ["@smoke", "@regression"]}, () => {
    const header = new HeaderPage;
    const login = new LoginPage;
    const home = new HomePage;

    if(Cypress.config("viewportWidth")<700) {

      header.getOptionsBtnMobile().click();
      header.getMainMenuMobile().select('Login');
    
    } else
 
    header.getLoginRegisterButon().click();
 
    login.getUserInput().type('mariDugarte');
    login.getPassInput().type('automation');
    login.getLoginBtn().click();

    home.getUserName().should("contain.text", "Mari");
    home.getUserName2().should("contain.text", "Mari");

})

it('Login OK con data json', { tags: ["@smoke", "@regression"]}, () => {
  const header = new HeaderPage;
  const login = new LoginPage;

  if(Cypress.config("viewportWidth")<700) {

    header.getOptionsBtnMobile().click();
    header.getMainMenuMobile().select('Login');
  
  } else

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[0].user);
  login.getPassInput().type(Data.users[0].password);
  login.getLoginBtn().click();

})

it('New address', () => {
  const header = new HeaderPage;
  const login = new LoginPage;
  const account = new Account;

  if(Cypress.config("viewportWidth")<700) {

    header.getOptionsBtnMobile().click();
    header.getMainMenuMobile().select('Login');
  
  } else

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[1].user);
  login.getPassInput().type(Data.users[1].password);
  login.getLoginBtn().click();

  account.getManageAddressBookBtn().click();
  account.getAddNewAddress().click();

  account.getInputFirstName().type('Marieliany');
  account.getInputLastName().type('Dugarte');
  account.getInputAddress1().type('Estomba 3715');
  account.getInputCity().type('Cordoba');
  account.getSelectCountry().select('Argentina');
  account.getSelectRegionState().select('Cordoba');
  account.getInputZipPostCode().type('1023');
  account.getOptionDefaultAddressNo().click();
  account.getContinueBtn().click();

  account.getInsertedOkBox().should("contain.text", "Your address has been successfully inserted");

})

it('New address Fail', () => {
  const header = new HeaderPage;
  const login = new LoginPage;
  const account = new Account;

  if(Cypress.config("viewportWidth")<700) {

    header.getOptionsBtnMobile().click();
    header.getMainMenuMobile().select('Login');
  
  } else

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[1].user);
  login.getPassInput().type(Data.users[1].password);
  login.getLoginBtn().click();

  account.getManageAddressBookBtn().click();
  account.getAddNewAddress().click();

  account.getContinueBtn().click();

  account.getErrorBox().should("contain.text", "Oops, there is an error with information provided!");

})

})