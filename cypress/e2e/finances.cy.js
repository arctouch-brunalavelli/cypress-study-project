

describe('Transações', () => {

//hooks -> execute before or after of each/all tests
//before
//beforeEach
//after
//afterEach

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/");
    });

    it('Cadastrar uma entrada', () => {
        

        cy.contains("+ Nova Transação").click()

        cy.get('#description').type("Freelance")

        cy.get('#amount').type(51.80)

        cy.get('#date').type("2024-08-03") //yyyy-mm-dd
        
        //cy.contains('Salvar').click()
        //cy.get('button').click()
        cy.contains('button', 'Salvar').click()

        //Cypress assertions
        //Taking the whole column line to check if each data is correct
        cy.get("tbody tr td.description").should("have.text", "Freelance")
        cy.get("tbody tr td.income").should("contain", "51,80")
        cy.get("tbody tr td.date").should("contain", "03/08/2024")
        
    }); 

    it('Cadastrar uma saída', () => {
       

        cy.contains("+ Nova Transação").click()
        cy.get('#description').type("Cinema")
        cy.get('#amount').type(-40,80)
        cy.get('#date').type("2024-08-03")

        cy.contains('button', 'Salvar').click()

        cy.get("tbody tr td.description").should("have.text", "Cinema")
        // cy.get("tbody tr td.income").should("contain", "-40,80")
        cy.get("tbody tr td.date").should("contain", "03/08/2024")

    });
 });

//Refactor by using functions:

// function criarTransacao(descricao, valor) {
//     cy.contains('button', 'Salvar').click()
//     cy.get("tbody tr td.description").should("have.text", "Freelance")
//     cy.get("tbody tr td.income").should("contain", "51,80")
//     cy.get("tbody tr td.date").should("contain", "03/08/2024")
// }

//Examples:

        // cy.visit("https://dev-finance.netlify.app/")

        // cy.get("input.post-title") 
        //     .type("My First Post"); 

        // cy.get("input.post-body")
        //     .type("Hello, world!"); 

        // cy.contains("Submit")
        //     .click();

        // cy.get("h1") 
        //     .should("contain", "My First Post");

