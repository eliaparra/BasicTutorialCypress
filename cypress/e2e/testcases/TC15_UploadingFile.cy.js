
describe('Handling uploading file', ()=>{

    /* First of all before running this test: 
    
    it is needed to install a plugin for uploading files.
    
    1. Run: npm install --save-dev cypress-file-upload
    
    2. Write on the commands.js file: import 'cypress-file-upload'*/

    it('Handling uploading file', () => {
        cy.visit('https://www.w3schools.com/howto/howto_html_file_upload_button.asp')

        cy.wait(3000) // wait for cookies alert appears
        cy.get('#accept-choices').click() // accept cookies

        const myFixturePath = 'favicon.png';
        cy.get('#myFile').attachFile(myFixturePath);


        
    })

  
  
   

    





})