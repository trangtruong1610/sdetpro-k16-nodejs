
// CREATE
let teo = {
    name: "Teo",
    age: 18,
    "my-gender": "male",
}

// READ
console.log(teo.name);
console.log(teo["my-gender"]);

// UPDATE
teo.name = "Ti";
console.log(teo.name);

// Destructure
const {name, age, ["my-gender"]: gender} = teo;
sayHello(teo);

// function with destructure params
function sayHello({name}){
    console.log(`Hello there, my name is ${name}`);
}

// DELETE
delete teo["my-gender"];
console.log(teo);
