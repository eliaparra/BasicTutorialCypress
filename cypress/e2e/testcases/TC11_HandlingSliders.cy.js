
describe('Handling sliders', ()=>{

    it('Handling sliders', () => {
        cy.visit('https://jqueryui.com/resources/demos/slider/default.html')
        cy.wait(3000)
        cy.get('#slider > span').invoke('attr','style','left: 40%')
        
    })

  
  
   

    





})