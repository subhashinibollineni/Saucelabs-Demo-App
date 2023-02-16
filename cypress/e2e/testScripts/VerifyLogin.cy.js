import LoginPage from "../../pages/LoginPage.cy";

describe("Verify Login to saucelabs", () => {

    let loginData
    before(() => {
        cy.launchApplication()
        cy.fixture("loginData").then((data) => {
            loginData = data
        })
    })

    it("Verify Login Test", () => {
        let loginPage = new LoginPage();
        loginPage.login(loginData.username, loginData.password)
    })
})