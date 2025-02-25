const readline = require("readline-sync");

function getResponse(rawResponse) {
    return rawResponse.json();
}

function findPost(response) {
    const inputUserID = getUserID();
    const userPosts = response.filter(data => data.userId === inputUserID);

    if (userPosts.length > 0) {
        const postID = getPostID();
        const foundPost = userPosts.find(data => data.id === postID);
        foundPost
            ? console.log(foundPost)
            : console.log("Can't find post with post ID: " + postID);
        return;
    }
    return console.log("User ID Not found with user ID: " + inputUserID);
}

function getAllRelatedPost(response) {
    const inputUserID = getUserID();
    const relatedPosts = response.filter(post => post.userId === inputUserID);
    relatedPosts.length > 0
        ? console.log(relatedPosts)
        : console.log("Can't find related posts with user ID: " + inputUserID);

}

function getUserOption() {
    return Number(readline.question("Please input your choice: "));
}

function getUserID() {
    return Number(readline.question("Please input user ID: "));
}

function getPostID() {
    return Number(readline.question("Please input post ID: "));
}


function printTheAppMenu() {
    console.log('=== MENU===\n ' +
        '1. Get Post Content\n ' +
        '2. Print all the related posts\n ' +
        '0. Exit the program');
}


module.exports = {
    printTheAppMenu,
    findPost,
    getResponse,
    getAllRelatedPost,
    getUserOption,
};