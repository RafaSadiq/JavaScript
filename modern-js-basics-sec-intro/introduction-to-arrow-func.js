// Same function written as function declaration
function fullName(fName, lName) {
    console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression
fullName = (fName, lName) => {
    console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');

// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => {
    console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');


//Coding Exercise

//Use a function expression called userInfo with three arguments for city, state, and zip. It must return Lehi, UT 84043.

// userInfo = function(city, state, zip) {
//     return(`${city}, ${state} ${zip}`);
// }

// userInfo('Lehi', 'UT ', 84043);

//----------------------------------------------

userInfo = function(city, state, zip) {
    console.log(`${city}, ${state} ${zip}`);
}

userInfo('Lehi', 'UT ', 84043);