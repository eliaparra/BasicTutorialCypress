


describe('Check the page navigation', ()=>{
   
    it('Verify page title', () => {
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','/index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').type('Elia')
        cy.title().should('contains','Welcome')
        cy.get('#load_form > :nth-child(5) > label').eq(1).then((label) => {
            cy.log(label.text());
        })
        cy.get('#load_form > :nth-child(5) > label').eq(0).should('contains.text','Username');
    })
    
})