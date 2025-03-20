import LoginPage from "./LoginPage";

export default class ExternalLoginPage extends LoginPage{
    private usernameSel = '#text-username';
    private passwordSel = '#text-password';
    private loginBtnSel = '#button-login';

    public inputUsername(username: string): void {
        console.log(`Input username: ${username} with locator ${this.usernameSel} to internal login page`);
    }
    public inputPassword(password: string): void {
        console.log(`Input password: ${password} with locator ${this.passwordSel} to internal login page`);
    }
    public clickOnLoginButton(): void {
        console.log(`Click on login button with locator ${this.loginBtnSel} on internal login page`);
    }
}