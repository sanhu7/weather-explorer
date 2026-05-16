
describe('Weather App E2E Tests', () => {
    it('should  fetch and display weather when user search for a city', () => {
        cy.visit('http://localhost:5173')
        cy.get('input[name="city"]').type('Stockholm')
        cy.get('button[type="submit"]').click()


        cy.get('#weather-result', { timeout: 10000 })
            .should('be.visible')
            .should('contain', 'Stockholm')
        cy.get('#weather-result').should('contain', 'Temperature')
        cy.get('#weather-result').should('contain', 'Wind Speed')


    })
})