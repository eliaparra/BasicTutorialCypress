




describe('Verify Click option', ()=>{
    it('Force and multiple click options', () => {
        cy.visit('http://qa.way2automation.com')
        cy.get('#load_form > div> div.span_1_of_4 > input').click({multiple:true,force:true})
    })
    
})