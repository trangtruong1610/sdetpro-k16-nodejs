// CREATE
const emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Others'],
]);

// READ
console.log(emergencyList.get('116'));

// check if key is existing
const is117Existing = emergencyList.has('117');
console.log(is117Existing);

// loop and get value
for (const key of emergencyList.keys()) {
    console.log(key, emergencyList.get(key));
    if (key === '113') {
        console.log(key, emergencyList.get(key));
    }
}

// loop over values without using keys
for (const value of emergencyList.values()) {
        console.log(value);
}

// UPDATE/ADD
emergencyList.set('117', 'Sth new')
console.log(emergencyList);

// DELETE
console.log(`Size before: ${emergencyList.size}`);
emergencyList.delete('116')
console.log(emergencyList);
console.log(`Size after: ${emergencyList.size}`);



