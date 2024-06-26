/// <reference types="cypress" />

describe('Cypress basic', () => {
  it('Should visit a page and assert title', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo')
  })
})