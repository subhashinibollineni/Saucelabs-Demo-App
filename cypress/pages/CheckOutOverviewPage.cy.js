class CheckOutOverviewPage {
  productsQuantity = ".cart_quantity"
  productsPrice = ".item_pricebar"
  totalPrice = ".summary_total_label"
  finishButton = "#finish"

  verifyEachProductQuantity(firstProductQuantity, secondProductQuantity) {
    let list = []
    cy.get(this.productsQuantity)
      .each(($quantity) => {
        list.push($quantity.text())
      })
      .then(() => {
        expect(list).to.eql([firstProductQuantity, secondProductQuantity])
      })
  }

  verifyEachProductPrice(firstProductPrice, secondProductPrice) {
    let list = []
    cy.get(this.productsPrice)
      .each(($price) => {
        list.push($price.text())
      })
      .then(() => {
        expect(list).to.eql([firstProductPrice, secondProductPrice])
      })
  }

  verifyTotalPriceOfProducts() {
    cy.get(this.totalPrice).should('have.contain', '$43.18')
  }

  clickFinishButton() {
    cy.get(this.finishButton).click()
  }
}

export default CheckOutOverviewPage;