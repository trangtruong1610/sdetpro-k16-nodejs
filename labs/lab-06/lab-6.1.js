const readline = require("readline-sync");
const {findPost, getResponse, getAllRelatedPost, printTheAppMenu, getUserOption} = require("./UtilsForLab06");


const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
    .then(getResponse)
    .then(function (response) {
        let RETRY_TIMES = 0;
        const MAX_RETRY_TIMES = 3;
        let isInteracting = true;

        while (isInteracting && MAX_RETRY_TIMES > RETRY_TIMES) {
            printTheAppMenu();
            const userOption = getUserOption();
            switch (userOption) {
                case 1:
                    findPost(response);
                    break;
                case 2:
                    getAllRelatedPost(response);
                    break;
                case 0:
                    isInteracting = false;
                    break;
                default:
                    console.log("Invalid option");
                    RETRY_TIMES++;

            }
        }
    });


