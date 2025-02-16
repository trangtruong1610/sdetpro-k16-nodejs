const readline = require("readline-sync");
const {findPost, sendRequest, getResponse, getAllRelatedPost, printTheAppMenu} = require("./UtilsForLab06");


const url = 'https://jsonplaceholder.typicode.com/todos';

menuApp();

function menuApp() {
    printTheAppMenu();
    const userOption = Number(readline.question("Please input your choice: "));
    switch (userOption) {
        case 1:
            const inputUserID = Number(readline.question("Please input user ID: "));
            sendRequest(url).then(function (response) {
                return getResponse(response);
            }).then(function (response) {
                return findPost(response, inputUserID);
            });
            break;
        case 2:
            const userId = Number(readline.question("Please input user ID: "));
            sendRequest(url).then(function (response) {
                return getResponse(response);
            }).then(function (response) {
                return getAllRelatedPost(response, userId);
            });
            break;
        case 0:
            break;
    }
}

