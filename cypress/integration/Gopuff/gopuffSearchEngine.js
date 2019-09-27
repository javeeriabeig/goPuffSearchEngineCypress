/// <reference types="Cypress" />

describe('GoPuff', function()
{
     before('WELCOME TO GOPUFF',function()
     {
       cy.log("WELCOME TO GOPUFF SEARCH ENGINE TESTAUTOMATION")
       cy.visit('https://gopuff.com/home') 
    }) 
 
   
    it('EnterAddress', function()
    {
        
        //CLick the address box
        cy.get('.c-moments__control > .c-control > .c-control__input').click({force: true})
       //Manually type the address
        cy.contains('Okay').click()
        cy.get('#mapSearch').clear()
        cy.get('#mapSearch').type("1142 East Tremont Street, Allentown, PA 18109, USA{enter}{downarrow}{enter}")
        cy.get('#mapAddAdddress').click()
        cy.contains('Okay').click()
        cy.get('#mapSearch').type("{enter}{downarrow}{enter}")
        cy.get('#mapAddAdddress').click()
        cy.contains('Okay').click() 
        cy.get('#mapAddAdddress').click()
    
    })
    it('TestUI', function()

    {  //Search page
        cy.get('#product-search').click()
        //Verify that on clicking on search box url navigates to #search
        cy.url().should('include', 'search')

        //Verify search box can let type 
        cy.get('#product-search').type("water")

        //Verify that cancel button is displayed when we type some text
        cy.get("img[alt='cancel search']").should('not.be.hidden')

        //Verify that search icon is displayed on search box
        cy.get('.puffWide-show.c-header__anonym-search-icon').should('be.visible')

        //Verify that searchbox placeholder text is search
        cy.get("#product-search").should('have.attr','placeholder','search')
 
        
    })
        it('TestCancelbtn', function()
    {
        cy.get('#product-search').clear()
        cy.get('#product-search').type("water")
        cy.get("img[alt='cancel search']").click()
        cy.get("#product-search").should('be.empty')

    
    })
    it('TestSearchlist', function()
    {
        cy.fixture('valuesToPass').then((data)=>
        {
        cy.selectProduct(data.keyword)
        
        })
    })

   after(function()
    {
       cy.get('#product-search').clear()
      cy.log("HOPE YOU LIKE SEARCH ENGINE TESTAUTOMATION")
   }) 

})
