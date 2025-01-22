const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

console.log(typeof([...map]));
console.log("========");

// [...map] convert Map into nested Array
// Array.find() loop over nested array and get key, value
// return Array has value match with val
function getKey(val) {
  return [...map].find(([key, value]) => val === value);
}

console.log("========");

// loop, from value get key
for (const value of map.values()) {
    console.log(getKey(value));
}
