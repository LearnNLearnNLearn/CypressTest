export class mainPage {

    mainPage_URL = 'https://crypto.com/nft';
    mainPage_Cookie_Settings = '#onetrust-accept-btn-handler';
    mainPage_Subscription_Field = '.SubscribeDropsNews_hero__2qCEx';
    mainPage_NFTCards = '.NftCard_grid__2BJkO';

    mainPage_Homepage_NFTCard_Title = '.NftCard_nftName__1Eh4U';
    mainPage_Homepage_NFTCard_Auction_Price = '.css-qhhkrs';
    mainPage_Homepage_NFTCard_Asset = '.NftCard_nftImage__3i7Yn';
    mainPage_Homepage_Quantity_For_Sale = '.css-1balkpd';

    mainPage_Click_NFTCard_Title = '.ExploreNftDetailModalContainer_titleContainer__K8UrU';
    mainPage_Click_NFTCard_Price = '.NftDetailModalBaseContainer_nftDetailContainer__1PbTN';
    mainPage_Click_NFTCard_Asset = '.NftDetailModalBaseContainer_artImage__2aFOT';
    mainPage_Click_NFTCard_Bid_Container = '.Modal_modalContainer__28A7L';
    mainPage_Click_NFTCard_Bid_Button = '.NftDetailModalBaseContainer_button__1pt3Y';
    mainPage_Click_NFTCard_Edition_Button = '.ExploreNftDetailModalContainer_selectOtherEdition__1LAZo';
    mainPage_Click_NFT_Edition_Container = '.EditionsModalContainer_container__NTU7b';

    mainPage_Subscription_Box = '.css-p0qlum';
    mainPage_Subscription_Text_Field = '.css-1xa8gwl';
    mainPage_Subscription_Button = '.SubscribeForm_subscriptionButton__3nRUQ';
    mainPage_Subscription_Success_Element = '.SubscribeForm_successBlock__2cpvI';
    mainPage_Subscription_Acknowledge_Checkbox = '.SubscribeForm_checkbox__z4ChK > rect';
    mainPage_Subscription_Verify_Bot_Button = '.geetest_radar_tip';

    navigate(){
        cy.visit(this.mainPage_URL)
        cy.wait(5000)   //due to computer speed, require some time to load page
        cy.get(this.mainPage_Cookie_Settings)
            .should('be.visible')
            .click()    //accept cookie settings
    }

    clickNFTCard(){
        cy.get(this.mainPage_NFTCards).within(($div)=>{
            cy.contains('a').click()
            cy.wait(2000) 
        })
    }

    scrollToSubscription(){
        cy.get(this.mainPage_Subscription_Field)
        .scrollIntoView()
        .and('be.visible')
    }

    //TODO: Can create a base class with similar functionality for botoh main_page and marketplace_page
}
