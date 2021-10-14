/// <reference types="cypress" />
import {mainPage} from "../pages/main_page"

const cryptoPage = new mainPage()


//Test when on homepage, check for title
it('testHomepageNFTCardTitle', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find(cryptoPage.mainPage_Homepage_NFTCard_Title)
        .then(($div)=>{
        let title = $div.text();
        assert.isNotNull(title,'Title is not nil')
    })
})

//Test when on homepage, check for auction price
it('testHomepageNFTCardAuctionPrice', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find(cryptoPage.mainPage_Homepage_NFTCard_Auction_Price)
        .then(($div)=>{
        let price = $div.text();
        assert.isNotNull(price,'Price is not nil')
    })
})

//Test when on homepage, check for asset
it('testHomepageNFTCardAssetVisual', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find(cryptoPage.mainPage_Homepage_NFTCard_Asset)
        .should('be.visible')
})

//Test when on homepage, check for quantity of sale
it('testHomepageNFTCardQuantity', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find(cryptoPage.mainPage_Homepage_Quantity_For_Sale)
        .then(($div)=>{
        let quantity = $div.text();
        assert.isNotNull(quantity,'Price is not nil')
    })
})

//Test when on homepage, check for total sales
it('testHomepageNFTCardTotalSales', () => {
    cryptoPage.navigate()
    cy.get(cryptoPage.mainPage_NFTCards)
        .find(cryptoPage.mainPage_Total_Sales)
        .then(($div)=>{
        let totalSales = $div.text();
        assert.isNotNull(totalSales,'Total sales is not nil')
    })
})

//Test after clicking NFTCard, check for title
it('testNFTCardTitle', () => {
    cryptoPage.navigate()
    cryptoPage.clickNFTCard()
    cy.get(cryptoPage.mainPage_Click_NFTCard_Title)
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
    cy.get(cryptoPage.mainPage_Click_NFTCard_Price)
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
    cy.get(cryptoPage.mainPage_Click_NFTCard_Asset)
        .should('be.visible')
})



//Test after clicking bid button, check if redirect to login
//This test is written on the assumption that user is not signed in clicking (currently no account to check for signed in)
it('testNFTCardBidButton', () => {
    cryptoPage.navigate()
    cryptoPage.clickNFTCard()
    cy.get(cryptoPage.mainPage_Click_NFTCard_Bid_Container)
        .contains(cryptoPage.mainPage_Click_NFTCard_Bid_Button, 'Place a bid')
        .should('be.visible')
        .click()        
    cy.url().should('include', '/login')
})

//Test after clicking select edition button, check if will show select edition page
it('testNFTCardEditionButton', () => {
    cryptoPage.navigate()
    cryptoPage.clickNFTCard()
    cy.get(cryptoPage.mainPage_Click_NFT_Edition_Container)
        .scrollIntoView()
        .should('be.visible')
        .click()
        .then(()=>{
            cy.wait(500)
            cy.get(cryptoPage.mainPage_Click_NFT_Edition_Page)
                .should('be.visible')
        })        
})


//Covered 10 cases
//TODO: check if price / title / additional details shown on homepage is same as after clicking NFT card