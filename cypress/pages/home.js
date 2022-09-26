class HomeLocators {
constructor () {
    this.Name = '.subtext';
    this.WelcomeBackAndName = '#customer_menu_top .menu_text';

}
}

export default class Home {
    constructor() {
        this.locators = new HomeLocators();
    }

getUserName () {
    return cy.get(this.locators.Name);
}

getUserName2 () {
    return cy.get(this.locators.WelcomeBackAndName);
}

}