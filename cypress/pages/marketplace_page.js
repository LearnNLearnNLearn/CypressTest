export class marketPlacePage {

    marketPlace_URL = 'https://crypto.com/nft/marketplace';
    mainPage_Cookie_Settings = '#onetrust-accept-btn-handler';
    marketPlace_NFTCards = '.css-1b7umkn';

    marketPlace_NFT_Card = '.css-10yi4wi';
    marketPlace_NFT_Card_X_Button = '.Cross_crossAnimation__2lLWX';
    marketPlace_Art_Category_Button = '[data-test-id="marketplace-category-art-button"]';
    marketPlace_Celebrities_Category_Button = '[data-test-id="marketplace-category-celebrities-button"]';
    marketPlace_Gaming_Category_Button = '[data-test-id="marketplace-category-gaming-button"]';
    marketPlace_Sport_Category_Button = '[data-test-id="marketplace-category-sport-button"]';
    marketPlace_Music_Category_Button = '[data-test-id="marketplace-category-music-button"]';
    marketPlace_Crypto_Category_Button = '[data-test-id="marketplace-category-crypto-button"]';
    marketPlace_Filter_Dropdown_Menu_Button = ':nth-child(1) > .css-fvr380 > :nth-child(1) > .HighlightButton_container__KsiUh > .css-1eygapw';
    marketPlace_Filter_Dropdown_Menu = '.FilterDropdown_dropdown__3MYbQ';

    navigate(){
        cy.visit(this.marketPlace_URL)
        cy.wait(5000)   //due to computer speed, require some time to load page
        cy.get(this.mainPage_Cookie_Settings)
            .should('be.visible')
            .click()    //accept cookie settings
    }

    clickNFTCard(){
        cy.get(this.marketPlace_NFTCards).within(($div)=>{
            cy.contains('a').click()
            cy.wait(2000) 
        })
    }

    navgiateBack(){
        cy.go('back')
        cy.wait(2000)
    }

    //TODO: Can create a base class with similar functionality for botoh main_page and marketplace_page
}
