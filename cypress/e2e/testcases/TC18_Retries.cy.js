

/*
https://docs.cypress.io/guides/guides/test-retries#Configure-Test-Retries

'runMode' allows you to define the number of test retries when running cypress run
'openMode' allows you to define the number of test retries when running cypress open

*/
describe('Check the page navigation', {
    retries: {
        //runMode: 2,
        openMode: 2, // este test se ejecutará un máximo de 3 veces
      }

}, ()=>{
   
    it('Verify page title', () => {
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','/index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').type('Elia')
        cy.title().should('contains','Welcome')
        cy.get('#load_form > :nth-child(5) > label').eq(1).then((label) => {
            cy.log(label.text());
        })
        cy.get('#load_form > :nth-child(5) > label').eq(0).should('contains.text','Usernameeeee');
    })
    
})