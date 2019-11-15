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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("SignIn", (email, password) => {
    cy.location("protocol").should("eq", "https:")
    cy.get('.icon.navigation-icon-user').click()
    cy.get('.authentication-input.email').type(email)
    cy.get('.authentication-input.password').type(password)
    cy.get('a[id=loginSubmit]').click();
    cy.location('href').should('eq', 'https://www.trendyol.com/butik/liste/kadin?e=login')
})
