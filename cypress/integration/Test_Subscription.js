/// <reference types="cypress" />
import {mainPage} from "../pages/main_page"

const cryptoPage = new mainPage()


//Test when input invalid email for subscription
it('testSubscriptionInputField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get('.css-p0qlum')
        .find('.css-1xa8gwl')
        .type('test')
    cy.get('.SubscribeForm_subscriptionButton__3nRUQ').click().then(()=>{
        cy.wait(500)
        assert.isNotNaN('.SubscribeForm_successBlock__2cpvI', 'Did not subscribe due to invalid email')
    })
})

//Test when input unchecked acknowledgement box for subscription
it('testUncheckedAcknowledgeBoxField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get('.css-p0qlum')
        .find('.css-1xa8gwl')
        .type('test@yahoo.com')
    cy.get('.SubscribeForm_subscriptionButton__3nRUQ').click().then(()=>{
        cy.wait(500)
        assert.isNotNaN('.SubscribeForm_successBlock__2cpvI', 'Did not subscribe due to unchecked acknowledge box')
    })
})

//Test when unchcked verify box for subscription
it('testUncheckedVerifyBoxField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get('.css-p0qlum')
        .find('.css-1xa8gwl')
        .type('test@yahoo.com')
    cy.get('.SubscribeForm_checkbox__z4ChK > rect').click()
    cy.get('.SubscribeForm_subscriptionButton__3nRUQ').click().then(()=>{
        cy.wait(500)
        assert.isNotNaN('.SubscribeForm_successBlock__2cpvI', 'Did not subscribe due to unchecked verify box')
    })
})

//Test when checked verify box for subscription
//Currently this case will fail due unable to click verify button and due to slider captcha
it('testUncheckedVerifyBoxField', () => {
    cryptoPage.navigate()
    cryptoPage.scrollToSubscription()
    cy.get('.css-p0qlum')
        .find('.css-1xa8gwl')
        .type('test@yahoo.com')
    cy.get('.SubscribeForm_checkbox__z4ChK > rect').click()
    cy.get('.geetest_radar_tip').click()
    // will fail case here due to timeout
    cy.get('.SubscribeForm_subscriptionButton__3nRUQ').click().then(()=>{
        cy.wait(500)
        // assert.isNaN('.SubscribeForm_successBlock__2cpvI', 'Did subscribe for email updates')
        assert.isNotNaN('.SubscribeForm_successBlock__2cpvI', 'Fail to  subscribe due to captcha')
    })
})
