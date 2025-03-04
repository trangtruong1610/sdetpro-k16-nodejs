const RequestHandler = require("./RequestHandler");
const readline = require("readline-sync");

// Execution
lab11();


// Function Declaration
async function lab11() {
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    let RETRY_TIMES = 0;
    const MAX_RETRY_TIMES = 3;
    let isInteracting = true;

    while (isInteracting && MAX_RETRY_TIMES > RETRY_TIMES) {
        printTheAppMenu();
        const userOption = Number(readline.question("Please input your choice: "));
        const requestHandler = new RequestHandler();

        switch (userOption) {
            case 1:
                const userId1 = Number(readline.question("Please input user ID: "));
                const postId = Number(readline.question("Please input post ID: "));
                await requestHandler.printTargetPost(URL, userId1, postId);
                break;
            case 2:
                const userId2 = Number(readline.question("Please input user ID: "));
                await requestHandler.printAllPosts(URL, userId2);
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