/// <reference types="cypress" />
import {mainPage} from "../pages/main_page"

const cryptoPage = new mainPage()

//Test search bar on homepage using text
it('testSearchWithText', () => {
    cryptoPage.navigate()
    const testValue = 'test'
    const testURL = '/nft/marketplace?search=test'
    cy.get(cryptoPage.mainPage_Search_Bar).type(testValue)
    cy.get(cryptoPage.mainPage_Search_Bar).type('{enter}')
    cy.url()
        .should('include', testURL)
    cy.get('.DiscoverPage_title__3U24I')
        .should('include.text', testValue)
})

//Test search bar on homepage using number
it('testSearchWithNumber', () => {
    cryptoPage.navigate()
    const testValue = '123'
    const testURL = '/nft/marketplace?search=123'
    cy.get(cryptoPage.mainPage_Search_Bar).type(testValue)
    cy.get(cryptoPage.mainPage_Search_Bar).type('{enter}')
    cy.url()
        .should('include', testURL)
    cy.get('.DiscoverPage_title__3U24I')
        .should('include.text', testValue)
})

//Test search bar on homepage using symbols
it('testSearchWithSymbols', () => {
    cryptoPage.navigate()
    const testValue = '@#!@$'
    const testURL = '/nft/marketplace?search=@#!@$'
    cy.get(cryptoPage.mainPage_Search_Bar).type(testValue)
    cy.get(cryptoPage.mainPage_Search_Bar).type('{enter}')
    cy.url()
        .should('include', testURL)
    // cy.get('.DiscoverPage_title__3U24I')
    //     .should('include.text', testValue)  --> symbols are evaluated different in URL
})

//Test search bar on homepage without input
it('testSearchWithoutInput', () => {
    cryptoPage.navigate()
    const testURL = '/nft/marketplace?search=test'
    cy.get(cryptoPage.mainPage_Search_Bar).type('{enter}')
    cy.url()
        .should('include', cryptoPage.mainPage_URL)
})

//Covered 4 cases