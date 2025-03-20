import LoginPage from './LoginPage';

export default class LoginTestFlow {
    static login(loginPage: LoginPage, username: string, password: string) {
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickOnLoginButton();
    }
}
