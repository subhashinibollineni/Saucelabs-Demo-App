import LoginPage from "../../pages/LoginPage.cy";
import ProductsPage from "../../pages/ProductsPage.cy";
import YourCartPage from "../../pages/YourCartPage.cy";
import CheckOutYourInformationPage from "../../pages/CheckOutYourInformationPage.cy";
import CheckOutOverviewPage from "../../pages/CheckOutOverviewPage.cy";
import CheckOutCompletePage from "../../pages/CheckOutCompletePage.cy";

describe("Verify Log out test", () => {

    let loginData
    let checkOutYourInformationData
    let checkOutOverviewData
    let checkOutCompleteData
    let productsData
    before(() => {
        cy.launchApplication()
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
        cy.fixture("checkOutYourInformationData").then((data) => {
            checkOutYourInformationData = data
        })
        cy.fixture("checkOutOverviewData").then((data) => {
            checkOutOverviewData = data
        })
        cy.fixture("checkOutCompleteData").then((data) => {
            checkOutCompleteData = data
        })
        cy.fixture("productsData").then((data) => {
            productsData = data
        })
    })

    it("Logout Test", () => {
        let loginPage = new LoginPage();
        loginPage.login(loginData.username, loginData.password)
        let productsPage = new ProductsPage();
        productsPage.addProductsToCart()
        let yourCart = new YourCartPage();
        yourCart.clickCheckOutButton()
        let checkOutYourInformationPage = new CheckOutYourInformationPage();
        checkOutYourInformationPage.enterYourInformation(checkOutYourInformationData.firstname, checkOutYourInformationData.lastname, checkOutYourInformationData.postalcode)
        let checkOutOverviewPage = new CheckOutOverviewPage()
        checkOutOverviewPage.clickFinishButton()
        let checkOutCompletePage = new CheckOutCompletePage()
        checkOutCompletePage.checkOutCompleteVerify(checkOutCompleteData.expectedtext)
        checkOutCompletePage.clickBackToHome()
        productsPage.verifyBackToHome(productsData.expectedtitle)
        productsPage.performLogout()
        loginPage.verifyLogOutSuccess()
    })
})