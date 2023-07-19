context('Visit the home mi estacion', () => {
    beforeEach(() => {
        cy.visit('http://192.168.1.10:8080/login')
    })

it('conect to site and login', () => {
    cy.get("input[name='document']").type('77171435')
    cy.get("input[name='password']").type('fygarciaj123')
    cy.get("button[type='submit']").click()
    cy.get("h5.card-title").should('contain', 'Principal')
})
})