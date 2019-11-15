context('Work', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Giriş Yap', () => {
        cy.SignIn('oglcnarbc@gmail.com','xyzt')
    })
})

