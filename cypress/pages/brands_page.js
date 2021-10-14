export class brandPage {

    mainPage_URL = 'https://crypto.com/nft';
    mainPage_Cookie_Settings = '#onetrust-accept-btn-handler';

    brandPage_Button = '.navigation_dropNavItem__3CW1U';
    brandPage_Dropdowon_List = '.navigation_dropdown__2bDjZ';
    brandPage_Dropdowon_Button = '.css-1g350hp';
    brandPage__Dropdown_IIHF_Worlds_Button = '[href="/nft/brands/iihfworlds"] > .css-1g350hp';
    brandPage__Dropdown_DRESSX_Button = '[href="/nft/brands/dressx"] > .css-1g350hp';
    brandPage__Dropdown_Heavy_Metal_Button = '[href="/nft/brands/heavy_metal_nft"] > .css-1g350hp';
    brandPage__Dropdown_Crypto_Button = '[href="/nft/brands/cryptocomnft"] > .css-1g350hp'
    brandPage__Dropdown_DeFi_The_Game_Button = '[href="/nft/brands/defithegame"] > .css-1g350hp';

    navigate(){
        cy.visit(this.mainPage_URL)
        cy.wait(5000)   //due to computer speed, require some time to load page
        cy.get(this.mainPage_Cookie_Settings)
            .should('be.visible')
            .click()    //accept cookie settings
    }

    clickDropdownButton(){
        cy.get(this.brandPage_Button)
            .click()
            .should('be.visible')
    }

}
