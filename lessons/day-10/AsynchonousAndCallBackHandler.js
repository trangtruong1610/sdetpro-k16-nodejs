/**
 * 1. Send request -> Get response | Asynchronous
 * 2. Process response | Asynchronous
 * 3. Validate response | Synchronous
 */

const url = 'invalid-url';

// Handle Asynchronous | Callback hell
sendRequest(url, function (response) {
    // response = { status: 200 }
    processResponse(response, function (statusCode){
        // statusCode = 200
        validateResponse(statusCode);
    })
});

// Mimic Asynchronous request
function sendRequest(url, callbackFn) {
    console.log(`1. Send request to ${url} ...`);
    setTimeout(function () {
        callbackFn({status: 200});
    }, 2000);
}

function processResponse(response, callbackFn) {
    console.log('2. Process the response ...');
    setTimeout(function () {
        callbackFn(response.status);
    }, 3000);
}

// Mimic Synchronous request
function validateResponse(response) {
    console.log('3. Validate the response ...');
    if (response === 200) {
        console.log('PASS');
    } else {
        console.error('FAILED');
    }
}

