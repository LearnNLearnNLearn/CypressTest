/// <reference types="cypress" />
import {marketPlacePage} from "../pages/marketplace_page"

const marketPage = new marketPlacePage()


//Test for redirection of NFTCard
it('testRedirectionOfNFTCard', () => {
    marketPage.navigate()
    marketPage.clickNFTCard()
    cy.url().should('include', 'asset=')
})

//Test for redirection back to marketplace
it('testRedirectionBackFromNFTCard', () => {
    marketPage.navigate()
    marketPage.clickNFTCard()
    marketPage.navgiateBack()
    cy.url().should('include', 'htps://crypto.com/nft/mtarketplace')
})
