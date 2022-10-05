class HomeLocators {
constructor () {
    this.welcomeMessage = 'div > h4';

}
}

export default class Home {
    constructor() {
        this.locators = new HomeLocators();
    }

    getWelcomeMessage () {
        return cy.get(this.locators.welcomeMessage);
    }
}