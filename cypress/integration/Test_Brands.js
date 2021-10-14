/// <reference types="cypress" />
import {brandPage} from "../pages/brands_page"

const dropdownBrandPage = new brandPage()


//Test clicking IIHF Worlds dropdown button
it('testIIHFWorldDropDownBrands', () => {
    dropdownBrandPage.navigate()
    dropdownBrandPage.clickDropdownButton()
    cy.get(dropdownBrandPage.brandPage__Dropdown_IIHF_Worlds_Button).click()
    cy.url().should('include', '/nft/brands/iihfworlds')
})

//Test clicking DRESSX dropdown button
it('testDRESSXDropDownBrands', () => {
    dropdownBrandPage.navigate()
    dropdownBrandPage.clickDropdownButton()
    cy.get(dropdownBrandPage.brandPage__Dropdown_DRESSX_Button).click()
    cy.url().should('include', '/nft/brands/dressx')
})

//Test clicking Heavy Metal dropdown button
it('testHeavyMetalDropDownBrands', () => {
    dropdownBrandPage.navigate()
    dropdownBrandPage.clickDropdownButton()
    cy.get(dropdownBrandPage.brandPage__Dropdown_Heavy_Metal_Button).click()
    cy.url().should('include', '/nft/brands/heavy_metal_nft')
})

//Test clicking Crypto.com dropdown button
it('testCryptoDotComDropDownBrands', () => {
    dropdownBrandPage.navigate()
    dropdownBrandPage.clickDropdownButton()
    cy.get(dropdownBrandPage.brandPage__Dropdown_Crypto_Button).click()
    cy.url().should('include', '/nft/brands/cryptocomnft')
})

//Test clicking DeFi The Gamedropdown button
it('testDeFiTheGameDropDownBrands', () => {
    dropdownBrandPage.navigate()
    dropdownBrandPage.clickDropdownButton()
    cy.get(dropdownBrandPage.brandPage__Dropdown_DeFi_The_Game_Button).click()
    cy.url().should('include', '/nft/brands/defithegame')
})

//Covered 5 cases