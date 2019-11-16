context('Trendyol Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Incorrect Login', () => {
        cy.SignIn('oglcnarbc@gmail.com','xyzt')
    })
})

