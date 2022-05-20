export class loginPage {
    
    constructor() {
        this.loginButton = 'input[value="Login"]';
        this.usernameField = 'input[name="username"]';
        this.passwordField = 'input[name="password"]';
        this.errorMessage = '.help-block';
    }


    fillUsernameField(username = Cypress.env('invalidUser').username) {
        cy.get(this.usernameField)
            .type(username)
    }

    fillPasswordField(password = Cypress.env('invalidUser').password) {
        cy.get(this.passwordField)
            .type(password) 
    }

    clickLoginButton() {
        cy.get(this.loginButton)
            .click()    
    }

    checkInvalidLoginError(errorValue = Cypress.env('errors').invalidLoginMessage) {
        cy.get(this.errorMessage)
            .should('contains.text', errorValue)
    }

    checkLoginSuccessfull() {
        cy.get(this.loginButton)
        .should('not.be.visible')
    }

}

export const LoginPage = new loginPage();