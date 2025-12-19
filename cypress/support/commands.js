// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
   cy.get('input[name="firstName"]')
    .type ('Alexandre')
    cy.get('input[name="firstName"]')
    .should('have.value', 'Alexandre')

    cy.get('input[name="lastName"]')
    .type ('Carriço')
    cy.get('input[name="lastName"]')
    .should('have.value', 'Carriço')

    cy.get('input[id="email"]')
    .type ('alexandre.ccury@gmail.com')
    cy.get('input[id="email"]')
    .should('have.value','alexandre.ccury@gmail.com')

    cy.get('input[id="phone"]')
    .type ('27998037487')
    cy.get('input[id="phone"]')
    .should('have.value','27998037487')

    cy.get('textarea[id="open-text-area"]')
    .type ('Muito bom, parabéns!')
    cy.get('textarea[id="open-text-area"]')
    .should('have.value', 'Muito bom, parabéns!')

    cy.get('button[type="submit"]').click();

    cy.get('.success')
    .should ('be.visible')
})


