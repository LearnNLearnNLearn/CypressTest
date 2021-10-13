# CypressTest
Code for testing site using Cypress using Javascript


# Setup
Using Visual Studio,

-Create package.json (npm init -y)
-Install Cypress (npm install cypresS)
-Open Cypress (npx cypress open)


# Test Case Design

## Classes
Create classes to use when navigating to page
-mainPage (this is used to navigate to https://crypto.com/nft)
-marketPlacePage (this is used to navigate to https://crypto.com/nft/marketplace)

Methods in the classes are mainly used for navigation purposes (i.e navigate to page, navigate to NFTCard, navigate to subscription, navigate to previous page)


## Test Cases

### Test NFT
For testing NFT, I created test cases to check for:
-When user is on homepage, if image / title / price is visible 
-When user clicks on NFTCard, if image / title / price is visible
-When user clicks on NFTCard, if bid button can be clicked and redirected to login (this is on assumption user isn't logged in as currently I do not have account to test for when user is logged in)

### Test Subscription
For testing subscription, I created test cases to check for:
-When user inputs invalid email address
-When user doesn't click acknowledgement of terms and conditions
-When user doesn't click verify box
-When user does all the above and manages to subscribe (this case doesn't work due to unable to click verify box / verify captcha) 

### Test Marketplace
For testing marketplace, I created test cases to check for:
-Redirection when user clicks on NFT card
-Close button when user clicks 'X' button
-Image URL each different categories 
-Dropdown menu for filter


