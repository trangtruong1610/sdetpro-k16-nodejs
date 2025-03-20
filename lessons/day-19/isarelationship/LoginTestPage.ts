import LoginPage from "./LoginPage";
import InternalLoginPage from "./InternalLoginPage";
import ExternalLoginPage from "./ExternalLoginPage";
import LoginTestFlow from "./LoginTestFlow";

let internalLoginPage: LoginPage = new InternalLoginPage();
let externalLoginPage: LoginPage = new ExternalLoginPage();

let internalLoginData = {
    username: 'teo',
    password: '123456'
}
let externalLoginData = {
    username: 'toan',
    password: "123456"
}

LoginTestFlow.login(internalLoginPage, internalLoginData.username, internalLoginData.password);
LoginTestFlow.login(externalLoginPage, externalLoginData.username, externalLoginData.password);