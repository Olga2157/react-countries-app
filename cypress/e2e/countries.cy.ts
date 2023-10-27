describe('Countries test', () => {
  it('Checking chosen country details', () => {
    cy.visit('http://localhost:5500/')
    cy.get('input').type('Ireland')
    cy.get('button').click()
    cy.get("#detail-country-name .card-title").invoke("text")
    .should('equal', 'Republic of Ireland')
    cy.get("#detail-country-capital .card-title").invoke("text")
    .should('equal', 'Dublin')
  })
})
