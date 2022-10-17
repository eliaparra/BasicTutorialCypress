
describe('Handling dropdown', ()=>{

    it('Verify dropdown elements', () => {
        cy.visit('https://www.wikipedia.org')
        cy.get('#searchLanguage').select('Eesti').should('have.value','et')
        cy.get('#searchLanguage').select('hi').should('have.value','hi')

    })

    it.only('Verify dropdown elements', () => {
        cy.visit('https://www.atrapalo.com')
        cy.get('#origen_vue').type('BAR')
        cy.contains('Barcelona, España (BCN)').click()
    })
  
   

    





})