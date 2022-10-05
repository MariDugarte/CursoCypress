/// <reference types="cypress" />
import HomePage from '../pages/home';


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('HomePage', { tags: ["@smoke", "@regression"]}, () => {
   const home = new HomePage;

   home.getWelcomeMessage().should("contain.text", "Welcome to the Automation Test Store!");
   
  })

})