let teo = {
    name: "Teo",
    age: 18,
    // Nested obj
    bankAccount: {
        checking: {
            accountNumber: 'checking accountNumber',
        },
        saving: {
            accountNumber: 'saving accountNumber',
        }
    }
};

// Shallow Copy
// let tun = {...teo};
// tun.name = 'Tun';
// tun.bankAccount.accountNumber = '123';

// Shallow copy - handle for nested obj as well
let ti = JSON.parse(JSON.stringify(teo));
ti.bankAccount.checking.accountNumber = '123';

console.log(teo);
console.log(ti);

console.log(Object.keys(teo));
console.log(Object.values(teo));
console.log(Object.entries(teo));
