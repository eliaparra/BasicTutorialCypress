
describe('Check links', ()=>{
    it('Verify links', () => {
        cy.visit('https://commons.wikimedia.org/wiki/Main_Page')
        //cy.get('a').contains('Commons').click()
        cy.get('.mainpage-welcome-sitename').should('contain.text','Commons')
        cy.get('a').its('length').then((elelength) => {
            cy.log(elelength)
        })
        cy.get('.vector-menu-content-list').eq(5).find('a').then((linktext) => {
            cy.log(linktext.text())    
        })
        cy.get('.vector-menu-content-list').eq(5).find('a').its('length').then((elelength) => {
            cy.log(elelength)    
        })
        cy.get('.vector-menu-content-list').eq(5).should('contain.text','Help')
        cy.get('#p-navigation').find('a').first().should('contain.text','Main')
        cy.get('#p-navigation > .vector-menu-content > .vector-menu-content-list').children('li').its('length').should('eq',5)
    })

    
    
    

    





})