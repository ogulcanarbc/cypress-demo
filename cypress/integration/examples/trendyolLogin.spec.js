context('Trendyol Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login', () => {
        cy.SignIn('oglcnarbc@gmail.com','xyzt')
    })
})

