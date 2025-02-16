/**
 * 1. Send request -> get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Synchronous
 */

const url = 'taolaobidao';
sendRequest(url).then(function (response) {
    return processResponse(response);
}).then(function (statusCode) {
    validateResponse(statusCode);
});

sendRequest(url).then(processResponse).then(validateResponse);


// Mimic Asynchronous
function sendRequest(url) {
    console.log(`1. Send request to the endpoint ${url} ...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({status: 200});
        }, 2000);
    });
}

// Mimic Synchronous
function processResponse(responseStatus) {
    console.log(`2. Process the response ...`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({status: 200});
        }, 2000);
    });

}

// Mimic Synchronous
function validateResponse(responseStatus) {
    console.log(`3. Validate the response ...`);
    if (responseStatus.status === 200) {
        console.log("PASS");
    } else {
        console.log("FAILED");
    }
}