const readline = require("readline-sync");
const {findPost, getResponse, getAllRelatedPost, printTheAppMenu} = require("./UtilsForLab06");


const url = 'https://jsonplaceholder.typicode.com/todos';

menuApp();

async function menuApp() {
    let RETRY_TIMES = 0;
    const MAX_RETRY_TIMES = 3;
    let isInteracting = true;
    const response = await fetch(url);
    const jsonResponse = await getResponse(response);

    while (isInteracting && MAX_RETRY_TIMES > RETRY_TIMES) {
        printTheAppMenu();
        const userOption = Number(readline.question("Please input your choice: "));
        switch (userOption) {
            case 1:
                await findPost(jsonResponse);
                break;
            case 2:
                getAllRelatedPost(jsonResponse);
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

