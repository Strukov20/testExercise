export class basePage {

    openApp() {
        cy.visit(Cypress.env('baseUrl'))
    }
}

export const BasePage = new basePage();