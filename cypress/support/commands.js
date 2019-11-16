import './commands'
Cypress.Commands.add("SignIn", (email, password) => {
    cy.location("protocol").should("eq", "https:")
    cy.get('.icon.navigation-icon-user').click()
    cy.get('.authentication-input.email').type(email)
    cy.get('.authentication-input.password').type(password)
    cy.get('a[id=loginSubmit]').click().then(()=>{
        cy.get('.error-box').should("have.text","Hatalı E-Posta / Şifre. Tekrar Deneyin.")
    })
})
