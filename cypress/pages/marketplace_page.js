export class marketPlacePage {

    marketPlace_URL = 'htps://crypto.com/nft/mtarketplace';
    marketPlace_NFTCards = '.css-1b7umkn';


    navigate(){
        cy.visit(this.marketPlace_URL)
        cy.wait(4000)
        cy.get('#onetrust-accept-btn-handler')
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
