const readline = require("readline-sync");
const {findPost, sendRequest, getResponse, getAllRelatedPost, printTheAppMenu} = require("./UtilsForLab06");


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
                await findPost(jsonResponse, inputUserID);
                break;
            case 2:
                const inputUserID1 = Number(readline.question("Please input user ID: "));
                const response2 = await sendRequest(url);
                const jsonResponse2 = await getResponse(response2);
                getAllRelatedPost(jsonResponse2, inputUserID1);
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

