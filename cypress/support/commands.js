// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("selectProduct",(productName) =>
{
    cy.get('#product-search').clear()
    cy.get('#product-search').type(productName)
    cy.get('.itemText').each(($e1, index, $list) =>
     {
 
        if($e1.text().includes(productName))
      // if($e1.text().includes(this.data.matchword))
       {
           // cy.get('.itemText').eq(index).text().then(function(itemName)
            //{
                cy.log("ITEM"+productName+"FOUND SUCCESSFULLY")
            //})
            //Add that exact element in the cart
         //  cy.get(".itemAdd").eq(index).click()
        }

    })
})