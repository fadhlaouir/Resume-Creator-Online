import { injectTooltip } from "react-md"

describe('My First Test', function(){
       // Arrange - setup initial app state
      // - visit a web page~
     // - query for an element~
       // Act - take an action
      // - interact with that element~
       // Assert - make an assertion
      // - make an assertion about page content~
  
    //   it('Does not do much', function(){
    //     expect(true).to.equal(true)
    // })
    // it('visit the kitchen sink', function(){
    //     cy.visit('http://google.com')
    // })
    // it('Find an element',function(){
    //     cy.visit('http://example.cypress.io')
    //     cy.contains('type')
    // })
    // it('Clicks an element',function(){
    //     cy.visit('http://example.cypress.io')
    //     cy.contains('type').click()
    // })
    // it('Makes an assertion',function(){
    //     cy.visit('http://example.cypress.io')
    //     cy.contains('type').click()
    //     cy.url()
    //     .should('includes','/commands/actions')
    // })
        it('Gets, types and asserts', function(){
        cy.visit('http://example.cypress.io')
        cy.contains('type').click()
        cy.url()
        .should('includes','/commands/actions')
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value','fake@email.com')
        })
})