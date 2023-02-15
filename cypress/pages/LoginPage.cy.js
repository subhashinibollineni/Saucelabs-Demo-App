class LoginPage {
    textUsername = "[name='user-name']"
    textPassword = "[name='password']"
    loginButton = "[value='Login']"
    actualLoginText = ".title"

    getUserName() {
        return cy.get(this.textUsername)
    }
    getPassword(password) {
        return cy.get(this.textPassword)
    }
    getLoginButton() {
        return cy.get(this.loginButton)
    }
    login(userName, password) {
        this.getUserName().type(userName)
        this.getPassword().type(password)
        this.getLoginButton().click()
    }
    verifyLogOutSuccess() {
        cy.get(this.loginButton).should('be.visible')
    }
}
export default LoginPage;