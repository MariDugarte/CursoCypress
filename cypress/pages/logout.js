class LogoutLocators {
constructor () {
    this.LogoutText = '.maintext';
}
}

export default class Login {
    constructor() {
        this.locators = new LogoutLocators();
    }

getLogoutText () {
    return cy.get(this.locators.LogoutText);
}

}