
describe('Handling checkboxes', ()=>{

    it('Verify cheboxes elements', () => {
        cy.visit('https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst')
        cy.get('#accept-choices').click() //acept cookies
        cy.get('#iframeResult').then(($iframe) => {
           let element =  $iframe.contents().find('body > button')
            cy.wrap(element).click()
        })
       
        cy.get('#runbtn').click()
    })

  
  
   

    





})