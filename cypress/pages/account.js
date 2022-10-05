class accountLocators {
constructor () {
    this.manageAddressBookBtn = '.nav-dash > li:nth-of-type(3) > a';
    this.Name = '.subtext';
    this.WelcomeBackAndName = '#customer_menu_top .menu_text';
    this.LogoutBtn = '.side_account_list > li:nth-of-type(10) > a';
    this.boxManageAddressBook = '.dash-tile.dash-tile-ocean';
    this.boxOrderHistory = '.dash-tile.dash-tile-flower';
    this.boxDownloads = '.dash-tile.dash-tile-oil';
    this.boxTransactionHistory = '.dash-tile.dash-tile-balloon';
    }
}

export default class Account {
    constructor() {
        this.locators = new accountLocators();
    }

getManageAddressBookBtn () {
    return cy.get(this.locators.manageAddressBookBtn);
}

getUserName () {
    return cy.get(this.locators.Name);
}

getUserName2 () {
    return cy.get(this.locators.WelcomeBackAndName);
}

getLogoutBtn () {
    return cy.get(this.locators.LogoutBtn);
}

getBoxManageAddressBook () {
    return cy.get(this.locators.boxManageAddressBook);
}

getBoxOrderHistory () {
    return cy.get(this.locators.boxOrderHistory);
}

getBoxDownloads () {
    return cy.get(this.locators.boxDownloads);
}

getBoxTransactionHistory () {
    return cy.get(this.locators.boxTransactionHistory);
}

};