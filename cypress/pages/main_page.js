export class mainPage {

    mainPage_URL = 'https://crypto.com/nft';
    mainPage_NFTCards = '.NftCard_grid__2BJkO';


    navigate(){
        cy.visit(this.mainPage_URL)
        cy.wait(4000)
        cy.get('#onetrust-accept-btn-handler')
            .should('be.visible')
            .click()    //accept cookie settings
    }

    clickNFTCard(){
        cy.get(this.mainPage_NFTCards).within(($div)=>{
            cy.contains('a').click()
            cy.wait(2000) 
        })
    }

    scrollToSubscription(){
        cy.get('.SubscribeDropsNews_hero__2qCEx')
        .scrollIntoView()
        .and('be.visible')
    }

    //TODO: Can create a base class with similar functionality for botoh main_page and marketplace_page
}
