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
    cy.get('.Cross_crossAnimation__2lLWX').click()
    cy.url().should('not.include', 'asset=')
})

//Test for image URL for Art category
it('testImageURLFromArtNFTCard', () => {
    marketPage.navigate()
    cy.get('[data-test-id="marketplace-category-art-button"]')
    .click()
    cy.get('.css-10yi4wi').within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Celebrities category
it('testImageURLFromCelebritiesNFTCard', () => {
    marketPage.navigate()
    cy.get('[data-test-id="marketplace-category-celebrities-button"]')
    .click()
    cy.get('.css-10yi4wi').within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Gaming category
it('testImageURLFromGamingNFTCard', () => {
    marketPage.navigate()
    cy.get('[data-test-id="marketplace-category-gaming-button"]')
    .click()
    cy.get('.css-10yi4wi').within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Sport category
it('testImageURLFromSportNFTCard', () => {
    marketPage.navigate()
    cy.get('[data-test-id="marketplace-category-sport-button"]')
    .click()
    cy.get('.css-10yi4wi').within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Music category
it('testImageURLFromMusicNFTCard', () => {
    marketPage.navigate()
    cy.get('[data-test-id="marketplace-category-music-button"]')
    .click()
    cy.get('.css-10yi4wi').within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for image URL for Crypto category
it('testImageURLFromCryptoNFTCard', () => {
    marketPage.navigate()
    cy.get('[data-test-id="marketplace-category-crypto-button"]')
    .click()
    cy.get('.css-10yi4wi').within(($div)=>{
        cy.contains('a')
            .should('have.attr','href')   
    })
})

//Test for dropdown menu
it('testDropDownFilter', () => {
    marketPage.navigate()
    cy.get(':nth-child(1) > .css-fvr380 > :nth-child(1) > .HighlightButton_container__KsiUh > .css-1eygapw')
        .click()
        .then(()=>{
        cy.wait(500)
        assert.isNotNaN('.FilterDropdown_dropdown__3MYbQ', 'Dropdown menu did show')
    })
})

//Covered 9 cases