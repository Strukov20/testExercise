import {BasePage} from '../../pages/basePage';
import {LoginPage} from '../../pages/loginPage'

describe("Login page", () => {
    it('login with valid credentials', () => {
        
        BasePage.openApp();

        LoginPage.fillUsernameField('put valid username')
        LoginPage.fillPasswordField('put valid password')
        LoginPage.clickLoginButton()
        LoginPage.checkLoginSuccessfull()  
    });

    it('login with invalid credentials', () => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php')

        LoginPage.fillUsernameField()
        LoginPage.fillPasswordField()
        LoginPage.clickLoginButton()
        LoginPage.checkInvalidLoginError()

        
    });
})