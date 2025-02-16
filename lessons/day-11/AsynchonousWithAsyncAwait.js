/**
 * 1. Send request -> get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */

const url = 'taolaobidao'
main();

async function main() {
    const response = await sendRequest(url);
    const statusCode = await processResponse(response);
    validateResponse(statusCode);
    console.log('Done');
}
// Mimic Asynchronous
function sendRequest(url){
    console.log(`1. Send request to the endpoint ${url} ...`)
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({status: 200})
        }, 2000)
    })
}

// Mimic Synchronous
function processResponse(responseStatus) {
    console.log(`2. Process the response ...`)
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({status: 200})
        }, 2000)
    })

}

// Mimic Synchronous
function validateResponse(responseStatus) {
    console.log(`3. Validate the response ...`)
    if (responseStatus.status === 200) {
        console.log("PASS");
    } else {
        console.log("FAILED");
    }
}

// callback hell -> wrap into promise -> async await syntax