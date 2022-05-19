export class loginPage {
    
    fillUsernameField(username = Cypress.env('invalidUser').username) {
        cy.get('input[name="username"]')
            .type(username)
    }

    fillPasswordField(password = Cypress.env('invalidUser').password) {
        cy.get('input[name="password"]')
            .type(password) 
    }

    clickLoginButton() {
        cy.get('input[value="Login"]')
            .click()    
    }

    checkInvalidLoginError(errorValue = Cypress.env('errors').invalidLoginMessage) {
        cy.get('[class="help-block"]')
            .should('contains.text', errorValue)
    }

    checkLoginSuccessfull() {
        cy.get('input[value="Login"]')
        .should('not.be.visible')
    }

}

export const loginMethods = new loginPage();