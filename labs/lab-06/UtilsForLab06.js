const readline = require("readline-sync");

function getResponse(rawResponse) {
    return rawResponse.json();
}

function findPost(response, inputUserID) {
    const userPosts = response.filter(data => data.userId === inputUserID);

    if (userPosts.length > 0) {
        const postID = Number(readline.question("Please input your post ID: "));
        const foundPost = userPosts.find(data => data.id === postID);
        foundPost
            ? console.log(foundPost)
            : console.log("Can't find post with post ID: " + postID);
    }
    return console.log("User ID Not found with user ID: " + inputUserID);
}


function sendRequest(url) {
    return fetch(url);
}

function getAllRelatedPost(response, inputUserID) {
    const relatedPosts = response.filter(post => post.userId === inputUserID);
    relatedPosts.length > 0
        ? console.log(relatedPosts)
        : console.log("Can't find related posts with user ID: " + inputUserID);

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
    sendRequest,
    getAllRelatedPost,
};