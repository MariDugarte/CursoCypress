/// <reference types="cypress" />
import HeaderPage from '../pages/header';
import LoginPage from '../pages/login';
import AddressPage from '../pages/address';
import LogoutPage from '../pages/logout';
import Data from '../fixtures/users.json';
import AccountPage from '../pages/account';

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
    const account = new AccountPage;

    if(Cypress.config("viewportWidth")<700) {

      header.getOptionsBtnMobile().click();
      header.getMainMenuMobile().select('Login');
    
    } else
 
    header.getLoginRegisterButon().click();
 
    login.getUserInput().type('mariDugarte');
    login.getPassInput().type('automation');
    login.getLoginBtn().click();

    if(Cypress.config("viewportWidth")>700) {

      account.getUserName().should("contain.text", "Mari");
      account.getUserName2().should("contain.text", "Mari");
    
    }

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

it('Login and Logout', { tags: ["@smoke", "@regression"]}, () => {
  const header = new HeaderPage;
  const login = new LoginPage;
  const account = new AccountPage;
  const logout = new LogoutPage;

  if(Cypress.config("viewportWidth")<700) {

    header.getOptionsBtnMobile().click();
    header.getMainMenuMobile().select('Login');
  
  } else

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[1].user);
  login.getPassInput().type(Data.users[1].password);
  login.getLoginBtn().click();

  account.getLogoutBtn().click(); 

  logout.getLogoutText().should("contain.text", " Account Logout");
  
})

it('New address', () => {
  const header = new HeaderPage;
  const login = new LoginPage;
  const account = new AccountPage;
  const address = new AddressPage;

  if(Cypress.config("viewportWidth")<700) {

    header.getOptionsBtnMobile().click();
    header.getMainMenuMobile().select('Login');
  
  } else

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[1].user);
  login.getPassInput().type(Data.users[1].password);
  login.getLoginBtn().click();

  account.getManageAddressBookBtn().click();
  address.getAddNewAddress().click();

  address.getInputFirstName().type('Marieliany');
  address.getInputLastName().type('Dugarte');
  address.getInputAddress1().type('Estomba 3715');
  address.getInputCity().type('Cordoba');
  address.getSelectCountry().select('Argentina');
  address.getSelectRegionState().select('Cordoba');
  address.getInputZipPostCode().type('1023');
  address.getOptionDefaultAddressNo().click();
  address.getContinueBtn().click();

  address.getInsertedOkBox().should("contain.text", "Your address has been successfully inserted");

})

it('New address Fail', () => {
  const header = new HeaderPage;
  const login = new LoginPage;
  const account = new AccountPage;
  const address = new AddressPage;

  if(Cypress.config("viewportWidth")<700) {

    header.getOptionsBtnMobile().click();
    header.getMainMenuMobile().select('Login');
  
  } else

  header.getLoginRegisterButon().click();

  login.getUserInput().type(Data.users[1].user);
  login.getPassInput().type(Data.users[1].password);
  login.getLoginBtn().click();

  account.getManageAddressBookBtn().click();
  address.getAddNewAddress().click();

  address.getContinueBtn().click();

  address.getErrorBox().should("contain.text", "Oops, there is an error with information provided!");

})

})