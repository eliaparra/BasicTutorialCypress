
describe('Handling sliders', ()=>{

    it('Handling sliders', () => {
        cy.visit('https://jqueryui.com/resources/demos/resizable/default.html')
        cy.wait(2000)
        cy.get('#resizable').invoke('attr','style','width: 601px; height: 321px;')
        
    })

  
  
   

    





})