class headerLocators {
    constructor () {
        //Blue Bar

this.LoginRegisterBtn = 'ul#customer_menu_top  a';
this.OptionsBtnMobile = '.collapsed.navbar-toggle';
this.mainMenuMobile = 'div#topnav > .form-control';
this.HomeBtn = '.logo > img[alt="Automation Test Store"]';
this.SPECIALS_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.ACCOUNT_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.CART_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.CHECKOUT_Btn = 'ul#main_menu_top  .menu_specials.top > .menu_text';
this.inputSearch = 'input#filter_keyword';

       //Cart & currency

       //Submenu 
this.HomeBtn = '.menu_home';
this.APPAREACCESSORIES_Btn = '.subnav > ul > li:nth-of-type(2) > a';
this.MAKEUP_Btn = '.subnav > ul > li:nth-of-type(3) > a';
this.SKINCARE_Btn = '.subnav > ul > li:nth-of-type(4) > a';
this.FRAGRANCE_Btn = '.subnav > ul > li:nth-of-type(5) > a';
this.MEN_Btn = '.subnav > ul > li:nth-of-type(6) > a';
this.HAIRCARE_Btn = '.subnav > ul > li:nth-of-type(7) > a';
this.BOOKS_Btn = '.subnav > ul > li:nth-of-type(8) > a';

this.navSubButtons = "nav>ul>li";
this.mainMenu = "ul.categorymenu>li>a";
this.homeOptionsContainer = "ul#main_menu";
this.homeOptionsContainer2 = "div.subcategories";

    }
}

export default class Header{
    constructor() {
        this.locators = new headerLocators();
    }

getLoginRegisterButon (){
return cy.get(this.locators.LoginRegisterBtn);
    }

getOptionsBtnMobile (){
      return cy.get(this.locators.OptionsBtnMobile);
          }

getMainMenuMobile (){
            return cy.get(this.locators.mainMenuMobile);
                }

 getSearchInput (){
return cy.get(this.locators.inputSearch);
     }

 getNavSubButtons(num) {
        return cy.get(this.locators.navSubButtons + ":nth-of-type(" + num + ")>a");
      }
    
getMainMenu() {
        return cy.get(this.locators.mainMenu);
      }
    
getHomeOptionsContainer() {
        return cy.get(this.locators.homeOptionsContainer);
      }
    
getHomeOptionsContainer2() {
        return cy.get(this.locators.homeOptionsContainer2);
      }
    }
