
const todo1Endpoint = 'https://jsonplaceholder.typicode.com/todos/1'
const url = 'https://jsonplaceholder.typicode.com';


fetch(url)
    .then(getResponse)
    .then(validateResponse)
console.log('done');

// Details Implementation
function getResponse(rawResponse) {
    return rawResponse.json()
}

function validateResponse(todo) {
    console.log(todo);
    if (todo.completed) {
        console.log('Task is completed')
    } else {
        console.log('Task is in progress')}
}

