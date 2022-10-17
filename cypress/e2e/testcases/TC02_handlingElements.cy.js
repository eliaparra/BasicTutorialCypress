
describe('Check the page navigation', ()=>{
    it('Verify element visibility and attribute values', () => {
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','/index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible');
        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr','name').should('contain','name');
    })

    
    it.only('Verify Parent, Child and Within Elements', () => {
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','/index.php')
        cy.get('#load_box').find('input').invoke('attr','type').should('not.have','hidden').its('length').then((elelength) => {
            cy.log('elelength: ' + elelength);
        });
        //find children
        cy.get('#load_box > form > fieldset').children('input').its('length').then((elelength) => {
            cy.log('elelength: ' + elelength);
        });
        //find within that form / section / block
        cy.get('#load_box > form > fieldset').within((section) => {
            cy.get('input').its('length').should('eq',6)
            cy.get('input').first().type('Texto a escribir')
            cy.get('input').last().prev().then((label) => {
                cy.log("Sibling element text is: " + label.text())
            })
            cy.get('input[name="phone"]').type('123456')
            cy.get('input').last().type('some password')
        })
    })
    

    





})