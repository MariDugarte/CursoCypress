class accountLocators {
constructor () {
    this.manageAccountBtn = '.nav-dash > li:nth-of-type(3) > a';
    this.addNewAddress = 'a[title="New Address"]';
    this.inputFirstName = '#AddressFrm_firstname';
    this.inputLastName = '#AddressFrm_lastname';
    this.inputAddress1 = 'input[name="address_1"]';
    this.inputCity = '#AddressFrm_city';
    this.selectRegionState = '#AddressFrm_zone_id'
    this.inputZipPostCode = '#AddressFrm_postcode';
    this.selectCountry = '#AddressFrm_country_id';
    this.optionDefaultAddressNo = '[for="AddressFrm_default0"] [type]';
    this.continueBtn = '[title="Continue"]';
    this.insertedOkBox = '.alert-success';
    this.errorBox = '.alert-danger';

    }
}

export default class Account {
    constructor() {
        this.locators = new accountLocators();
    }

getManageAccountBtn () {
    return cy.get(this.locators.manageAccountBtn);
}

getAddNewAddress () {
    return cy.get(this.locators.addNewAddress);
}

getInputFirstName () {
    return cy.get(this.locators.inputFirstName);
}

getInputLastName () {
    return cy.get(this.locators.inputLastName);
}

getInputAddress1 () {
    return cy.get(this.locators.inputAddress1);
}

getInputCity() {
    return cy.get(this.locators.inputCity);
}

getSelectRegionState() {
    return cy.get(this.locators.selectRegionState);
}

getOptionCordoba () {
    return cy.get(this.locators.optionCordoba);
}

getInputZipPostCode () {
    return cy.get(this.locators.inputZipPostCode);
}

getSelectCountry () {
    return cy.get(this.locators.selectCountry);
}

getOptionArgentina () {
    return cy.get(this.locators.optionArgentina);
}

getOptionDefaultAddressNo () {
    return cy.get(this.locators.optionDefaultAddressNo);
}

getContinueBtn () {
    return cy.get(this.locators.continueBtn);
}

getInsertedOkBox () {
    return cy.get(this.locators.insertedOkBox);
}

getErrorBox () {
    return cy.get(this.locators.errorBox);
}

}