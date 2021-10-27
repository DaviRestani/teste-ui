/// <reference types="cypress" />

describe("testeui", () => {
    it("Switch de testes: Testar os casos do site da Pichau ", () => {
      cy.visit("https://www.pichau.com.br"); 
      cy.wait(1000);
    });

    it("Teste com botão de acessar a todos os departamentos",()=>{
      cy.get('.MuiGrid-grid-md-4 > .MuiButtonBase-root').click();
      cy.wait(1000);
    })

    it("Teste para verificar um texto do departamento de hardware",() =>{
      cy.get(':nth-child(4) > :nth-child(1) > .jss109 > .MuiListItemText-root > .MuiTypography-root').should("contain.text","Hardware");      
      cy.wait(1000);
    })

    it("Teste no botão de monitores",()=>{
        cy.get(':nth-child(4) > :nth-child(4)').click();
        cy.wait(1000);
    })

    it("Teste no botão de criar conta",()=>{
      cy.get('strong > [href="/account"]').click();  
      cy.wait(1000);
    })

    it("Teste de criar a conta, com aviso de erro ",()=>{

      cy.get('#username').type("Chris");
      cy.get('#password').type("123");
      cy.get('[data-cy=login-submit]').click();
      cy.get('#alert-dialog-title > .MuiTypography-root').should("contain.text","Autenticação");

    })


  });