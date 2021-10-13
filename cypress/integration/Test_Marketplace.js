/// <reference types="cypress" />
import {marketPlacePage} from "../pages/marketplace_page"

const marketPage = new marketPlacePage()

//Test for redirection of NFTCard
it('testRedirectionOfNFTCard', () => {
    marketPage.navigate()
    marketPage.clickNFTCard()
    cy.url().should('include', 'asset=')
})

//Test for button to close NFTCard
it('testRedirectionBackFromNFTCard', () => {
    marketPage.navigate()
    marketPage.clickNFTCard()
    cy.get(marketPage.marketPlace_NFT_Card_X_Button).click()
    cy.url().should('not.include', 'asset=')
})

//Test for image URL for Art category
it('testImageURLFromArtNFTCard', () => {
    marketPage.navigate()
    cy.get(marketPage.marketPlace_Art_Category_Button)
    .click()
    cy.get(marketPage.marketPlace_NFT_Card).within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Celebrities category
it('testImageURLFromCelebritiesNFTCard', () => {
    marketPage.navigate()
    cy.get(marketPage.marketPlace_Celebrities_Category_Button)
    .click()
    cy.get(marketPage.marketPlace_NFT_Card).within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Gaming category
it('testImageURLFromGamingNFTCard', () => {
    marketPage.navigate()
    cy.get(marketPage.marketPlace_Gaming_Category_Button)
    .click()
    cy.get(marketPage.marketPlace_NFT_Card).within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Sport category
it('testImageURLFromSportNFTCard', () => {
    marketPage.navigate()
    cy.get(marketPage.marketPlace_Sport_Category_Button)
    .click()
    cy.get(marketPage.marketPlace_NFT_Card).within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Music category
it('testImageURLFromMusicNFTCard', () => {
    marketPage.navigate()
    cy.get(marketPage.marketPlace_Music_Category_Button)
    .click()
    cy.get(marketPage.marketPlace_NFT_Card).within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Crypto category
it('testImageURLFromCryptoNFTCard', () => {
    marketPage.navigate()
    cy.get(marketPage.marketPlace_Crypto_Category_Button)
    .click()
    cy.get(marketPage.marketPlace_NFT_Card).within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for dropdown menu
it('testDropDownFilter', () => {
    marketPage.navigate()
    cy.get(marketPage.marketPlace_Filter_Dropdown_Menu_Button)
        .click()
        .then(()=>{
        cy.wait(500)
        assert.isNotNaN(marketPage.marketPlace_Filter_Dropdown_Menu, 'Dropdown menu did show')
    })
})

//Covered 9 cases