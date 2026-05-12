
describe('Weather App E2E Tests', () => {
    it('should  fetch and display weather when user search for a city', () => {
        cy.visit('http://localhost:5173'),
            cy.get('input[name="city"]').type('Stockholm')

    })
})