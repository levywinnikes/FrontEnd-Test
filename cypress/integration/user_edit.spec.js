describe('Users', function () {
    it('Edit user', function () {
        cy.visit('http://localhost:3000/')

        cy.contains('Show').click()

        cy.get('input[name="firtName-form"]')
        .click()
            .clear()
            .type('Jonas')
            .should('have.value',  'Jonas')

            cy.get('input[name="lastName-form"]')
            .click()
                .clear()
                .type('Mello')
                .should('have.value',  'Mello')

                cy.contains("Save").click()

                cy.contains("Jonas Mello")


    })
})

