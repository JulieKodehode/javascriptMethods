// Part 1: String Manipulation
let originalString = "Hello, World!";
let concatenatedString = originalString.concat(" Welcome!");
let uppercaseString = originalString.toUpperCase();
let indexOfComma = originalString.indexOf(",");
let extractedString = originalString.slice(0, 5);

console.log("Original String:", originalString);
console.log("Concatenated String:", concatenatedString);
console.log("Uppercase String:", uppercaseString);
console.log("Index of ',':", indexOfComma);
console.log("Extracted String:", extractedString);

// Part 2: Number Manipulation
let originalNumber = 42;
let numberAsString = originalNumber.toString();
let fixedNumber = originalNumber.toFixed(2);
let precisionNumber = originalNumber.toPrecision(4);
let isNumberNaN = isNaN(originalNumber);
let isNumberFinite = isFinite(originalNumber);

console.log("Original Number:", originalNumber);
console.log("Number as String:", numberAsString);
console.log("Fixed Number:", fixedNumber);
console.log("Precision Number:", precisionNumber);
console.log("Is NaN:", isNumberNaN);
console.log("Is Finite:", isNumberFinite);

// Part 3: Array Manipulation
let originalArray = [1, 2, 3, 4, 5];
originalArray.push(6);
originalArray.pop();
originalArray.unshift(0);
originalArray.shift();
let concatenatedArray = originalArray.concat([7, 8, 9]);
let indexOfThree = originalArray.indexOf(3);
let extractedArray = originalArray.slice(1, 4);

console.log("Original Array:", originalArray);
console.log("Concatenated Array:", concatenatedArray);
console.log("Index of 3:", indexOfThree);
console.log("Extracted Array:", extractedArray);

originalArray.forEach((element, index) => {
	console.log(`Element at index ${index}: ${element}`);
});

// Part 4: Object Manipulation
let originalObject = {
	name: "Julie",
	age: 26,
	city: "Bergen",
};

let keys = Object.keys(originalObject);
let values = Object.values(originalObject);
let entries = Object.entries(originalObject);
let hasAgeProperty = originalObject.hasOwnProperty("age");

let newObject = {};
Object.assign(newObject, originalObject);

console.log("Original Object:", originalObject);
console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries:", entries);
console.log("Has 'age' property:", hasAgeProperty);
console.log("Copied Object:", newObject);
