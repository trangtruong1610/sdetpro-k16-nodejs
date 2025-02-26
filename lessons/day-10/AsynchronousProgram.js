console.log('1. Chay toi nha thang Teo');
console.log('2. Teo oi uong cafe ko');
console.log('3. Chay toi quan cafe');

console.log('=====');

console.log('1. Chay toi nha thang Teo');
setTimeout(callBackFunction.bind({age:18}, 'Teo'), 2000);
console.log('3. Chay toi quan cafe');

function callBackFunction(name) {
    console.log(this.age);
    console.log(`2. ${name} oi uong cafe ko`);
}


