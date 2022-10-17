
describe('Handling drag and drop', ()=>{

    it('Handling drag and drdop', () => {
        cy.visit('https://www.elmundo.es')
        cy.wait(3000)
        cy.get('#didomi-notice-agree-button > span').click()
        cy.contains('España').trigger('mouseover')
        cy.wait(1000)
        cy.contains('Castilla y León').click()
        
    })

  
  
   

    





})