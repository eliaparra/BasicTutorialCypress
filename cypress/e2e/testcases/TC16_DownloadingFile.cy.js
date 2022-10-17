
describe('Handling uploading file', ()=>{

    /* First of all before running this test: 
    
    it is needed to install a plugin for downloading files.
    
    1. Run: npm install cypress-downloadfile
    
    2. Write on the commands.js file: require('cypress-downloadfile/lib/downloadFileCommand')
    
    3. For cypress 10, add the following lines to cypress.config.js: 

    const { defineConfig } = require('cypress')
    const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

    module.exports = defineConfig({
        // setupNodeEvents can be defined in either
        // the e2e or component configuration
        e2e: {
            setupNodeEvents(on, config) {
                on('task', {downloadFile})
                })
            }
        }
    })
    
    */

    it('Handling downloading file', () => {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
        cy.readFile('./mydownloads/example.jpg').should('exist')
    
    })

   //after first execution the folder 'mydownloads' should be created on the cypress project
  
   

    





})