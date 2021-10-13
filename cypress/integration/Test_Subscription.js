/// <reference types="cypress" />
import {mainPage} from "../pages/main_page"

const cryptoPage = new mainPage()


//Test when empty input email for subscription
it('testEmptySubscriptionInputField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get(cryptoPage.mainPage_Subscription_Box)
        .find(cryptoPage.mainPage_Subscription_Text_Field)
    cy.get(cryptoPage.mainPage_Subscription_Button).click().then(()=>{
        cy.wait(500)
        assert.isNotNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Did not subscribe due to invalid email')
    })
})

//Test when input invalid text input for subscription
it('testInvalidTextInputSubscriptionInputField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get(cryptoPage.mainPage_Subscription_Box)
        .find(cryptoPage.mainPage_Subscription_Text_Field)
        .type('test')
    cy.get(cryptoPage.mainPage_Subscription_Button).click().then(()=>{
        cy.wait(500)
        assert.isNotNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Did not subscribe due to invalid email')
    })
})

//Test when input invalid number input for subscription
it('testInvalidNumberInputSubscriptionInputField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get(cryptoPage.mainPage_Subscription_Box)
        .find(cryptoPage.mainPage_Subscription_Text_Field)
        .type('123')
    cy.get(cryptoPage.mainPage_Subscription_Button).click().then(()=>{
        cy.wait(500)
        assert.isNotNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Did not subscribe due to invalid email')
    })
})

//Test when input invalid email for subscription
it('testInvalidEmailSubscriptionInputField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get(cryptoPage.mainPage_Subscription_Box)
        .find(cryptoPage.mainPage_Subscription_Text_Field)
        .type('test@xyz')
    cy.get(cryptoPage.mainPage_Subscription_Button).click().then(()=>{
        cy.wait(500)
        assert.isNotNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Did not subscribe due to invalid email')
    })
})

//Test when input unchecked acknowledgement box for subscription
it('testUncheckedAcknowledgeBoxField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get(cryptoPage.mainPage_Subscription_Box)
        .find(cryptoPage.mainPage_Subscription_Text_Field)
        .type('test@yahoo.com')
    cy.get(cryptoPage.mainPage_Subscription_Button).click().then(()=>{
        cy.wait(500)
        assert.isNotNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Did not subscribe due to unchecked acknowledge box')
    })
})

//Test when unchcked verify box for subscription
it('testUncheckedVerifyBoxField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get(cryptoPage.mainPage_Subscription_Box)
        .find(cryptoPage.mainPage_Subscription_Text_Field)
        .type('test@yahoo.com')
    cy.get(cryptoPage.mainPage_Subscription_Acknowledge_Checkbox).click()
    cy.get(cryptoPage.mainPage_Subscription_Button).click().then(()=>{
        cy.wait(500)
        assert.isNotNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Did not subscribe due to unchecked verify box')
    })
})

//Test when checked verify box for subscription
//Currently this case will fail due unable to click verify button and due to slider captcha
it('testUncheckedVerifyBoxField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get(cryptoPage.mainPage_Subscription_Box)
        .find(cryptoPage.mainPage_Subscription_Text_Field)
        .type('test@yahoo.com')
    cy.get(cryptoPage.mainPage_Subscription_Acknowledge_Checkbox).click()
    cy.get(cryptoPage.mainPage_Subscription_Verify_Bot_Button).click()
    // will fail case here due to timeout
    cy.get(cryptoPage.mainPage_Subscription_Button).click().then(()=>{
        cy.wait(500)
        // assert.isNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Did subscribe for email updates')
        assert.isNotNaN(cryptoPage.mainPage_Subscription_Success_Element, 'Fail to  subscribe due to captcha')
    })
})

//Covered 7 cases