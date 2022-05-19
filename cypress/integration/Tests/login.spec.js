import {loginMethods} from '../../pages/loginPage'

describe("Login page", () => {
    it('login with valid credentials', () => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php')

        loginMethods.fillUsernameField('put valid username')
        loginMethods.fillPasswordField('put valid password')
        loginMethods.clickLoginButton()
        loginMethods.checkLoginSuccessfull()

        
    });

    it('login with invalid credentials', () => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php')

        loginMethods.fillUsernameField()
        loginMethods.fillPasswordField()
        loginMethods.clickLoginButton()
        loginMethods.checkInvalidLoginError()

        
    });
})