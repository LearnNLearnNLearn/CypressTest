/// <reference types="cypress" />
import {mainPage} from "../pages/main_page"

const cryptoPage = new mainPage()

//Test when on homepage, check for title
it('testHomepageNFTCardTitle', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find('.NftCard_nftName__1Eh4U')
        .then(($div)=>{
        let price = $div.text();
        assert.isNotNull(price,'Title is not nil')
    })
})

//Test when on homepage, check for price
it('testHomepageNFTCardPrice', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find('.css-qhhkrs')
        .then(($div)=>{
        let price = $div.text();
        assert.isNotNull(price,'Price is not nil')
    })
})

//Test when on homepage, check for asset
it('testHomepageNFTCardAssetVisual', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find('.NftCard_nftImage__3i7Yn')
        .should('be.visible')
})

//Test after clicking NFTCard, check for title
it('testNFTCardTitle', () => {
    cryptoPage.navigate()
    cryptoPage.clickNFTCard()
    cy.get('.ExploreNftDetailModalContainer_titleContainer__K8UrU')
        .should('not.be.empty')
        .and('be.visible')
        .then(($div)=>{
            let title = $div.text();
            assert.isNotNull(title,'Title is not nil')
    })
})

//Test after clicking NFTCard, check for price
it('testNFTCardPrice', () => {
    cryptoPage.navigate()
    cryptoPage.clickNFTCard()
    cy.get('.NftDetailModalBaseContainer_nftDetailContainer__1PbTN')
        .find('.css-e596xv')
        .should('not.be.empty')
        .and('be.visible')
        .then(($div)=>{
            let price = $div.text();
            assert.isNotNull(price,'Price is not nil')
    })
})

//Test after clicking NFTCard, check for asset
it('testNFTCardAssetVisual', () => {
    cryptoPage.navigate()
    cryptoPage.clickNFTCard()
    cy.get('.NftDetailModalBaseContainer_artImage__2aFOT')
        .should('be.visible')
})

//Test after clicking bid button, check if redirect to login
//This test is written on the assumption that user is not signed in clicking (currently no account to check for signed in)
it('testNFTCardBidButton', () => {
    cryptoPage.navigate()
    cryptoPage.clickNFTCard()
    cy.get('.Modal_modalContainer__28A7L')
        .contains('.NftDetailModalBaseContainer_button__1pt3Y', 'Place a bid')
        .should('be.visible')
        .click()        
    cy.url().should('include', '/login')
})


//Covered 7 cases
//TODO: check if price / title / additional details shown on homepage is same as after clicking NFT card