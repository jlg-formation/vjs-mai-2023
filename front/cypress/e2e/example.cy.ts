// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('Gestion Stock')
    cy.contains('Gérer efficacement votre stock !')
    cy.contains('Mentions légales')
    cy.contains('a', 'Voir le stock').click()
    cy.get('a[title="Ajouter"]').click()

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `outil${id}`

    cy.get('input').eq(0).clear()
    cy.get('input').eq(0).type(testname)
    cy.get('input').eq(1).clear()
    cy.get('input').eq(1).type('12')
    cy.get('input').eq(2).clear()
    cy.get('input').eq(2).type('15')
    cy.get('button').click()
    cy.contains(testname).click()
    cy.get('button[title="Supprimer"]').click()
  })
})
