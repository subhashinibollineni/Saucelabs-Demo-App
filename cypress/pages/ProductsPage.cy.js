class ProductsPage {
    addSauceBackPack = "#add-to-cart-sauce-labs-backpack"
    addSauceBikeLight = "#add-to-cart-sauce-labs-bike-light"
    buttonCart = ".shopping_cart_link"
    title = ".title"
    menuButton = "#react-burger-menu-btn"
    logoutButton = "#logout_sidebar_link"

    getSauceBackPack() {
        return cy.get(this.addSauceBackPack)
    }
    getSauceBikeLight() {
        return cy.get(this.addSauceBikeLight)
    }
    getCartButton() {
        return cy.get(this.buttonCart)
    }
    addProductsToCart() {
        this.getSauceBackPack().click()
        this.getSauceBikeLight().click()
        this.getCartButton().click()
    }
    verifyProductsPageNavigation() {
        cy.get(buttonCart).should('be.visible')
    }
    verifyBackToHome(expectedText) {
        cy.get(this.title).should('have.text', expectedText)
    }
    performLogout() {
        cy.get(this.menuButton).click()
        cy.get(this.logoutButton).click()
    }
}

export default ProductsPage;