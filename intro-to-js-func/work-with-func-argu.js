function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));



//EXERCISE

//Create a function called sum that adds two arguments together and returns the sum of the two numbers.

// function sum(a, b) {
//     return (a + b);

// }

// console.log(sum(1, 2));

// SAME AS

// function sum(a, b) {
//     return a + b;

// }

// console.log(sum(1, 2));