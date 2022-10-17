
describe('Validating data', ()=>{


    it('Validate custom commands', () => {
        cy.visit('https://way2automation.com/angularjs-protractor/banking/#/login')

        cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()
        cy.get('body > div.ng-scope > div > div.ng-scope > div > div.center > button:nth-child(1)').click()

        //the custom command called 'addCustomer' is declared on support/commands.js
        cy.addCustomer('NombrePrueba','ApellidoPrueba', '123456')
    })

   
  
   

    





})