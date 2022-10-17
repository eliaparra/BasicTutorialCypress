
describe('Handling drag and drop', ()=>{

    /* First of all before running this test: 
    
    it is needed to install a plugin for dragging and dropping.
    
    1. Run: npm install --save-dev @4tw/cypress-drag-drop (you can find this plugin on the plugin section on https://docs.cypress.io/)
    
    2. Write on the commands.js file: require('@4tw/cypress-drag-drop')*/
    
    it('Handling drag and drdop', () => {
        cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')

        cy.get('#draggable').drag('#droppable',{force: true})


        
    })

  
  
   

    





})