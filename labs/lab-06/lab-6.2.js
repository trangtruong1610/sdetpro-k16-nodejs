const readline = require("readline-sync");
const {findUserByUserId, sendRequest, getResponse} = require("../../utils/UtilMethods");


const url = 'https://jsonplaceholder.typicode.com/todos';

menuApp();

async function menuApp() {
    let RETRY_TIMES = 0;
    const MAX_RETRY_TIMES = 3;
    let isInteracting = true;
    while (isInteracting && MAX_RETRY_TIMES > RETRY_TIMES) {
        printTheAppMenu();
        const userOption = Number(readline.question("Please input your choice: "));
        switch (userOption) {
            case 1:
                const inputUserID = Number(readline.question("Please input user ID: "));
                const response = await sendRequest(url);
                const jsonResponse = await getResponse(response);
                await findUserByUserId(jsonResponse, inputUserID);
                break;
            case 2:
                const inputPostId = Number(readline.question("Please input your post ID: "));
                const response2 = await sendRequest(`${url}/${inputPostId}`);
                const jsonResponse2 = await getResponse(response2);
                if (jsonResponse2.id === inputPostId) {
                    console.log(jsonResponse2);
                } else {
                    console.log("Post Id not found");
                }
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log("Invalid option");
                RETRY_TIMES++;
        }

    }
}

function printTheAppMenu() {
    console.log('=== MENU===\n ' +
        '1. Get Post Content\n ' +
        '2. Print all the related posts\n ' +
        '0. Exit the program');
}

