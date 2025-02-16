const readline = require("readline-sync");
const {findUserByUserId,sendRequest, getResponse} = require("../../utils/UtilMethods");


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
            }).then(function (users) {
                return findUserByUserId(users, inputUserID);
            });
            break;
        case 2:
            const postId = Number(readline.question("Please input your post ID: "));
            sendRequest(`${url}/${postId}`).then(function (response) {
                return getResponse(response);
            }).then(function (response) {
                if (response.id === postId) {
                    console.log(response);
                } else {
                    console.log("Post Id not found");
                }
            });
            break;
        case 0:
            break;
    }
}

function printTheAppMenu() {
    console.log('=== MENU===\n ' +
        '1. Get Post Content\n ' +
        '2. Print all the related posts\n ' +
        '0. Exit the program');
}

