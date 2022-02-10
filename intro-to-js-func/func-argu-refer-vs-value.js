var someUser = {
    name: 'Jordan'
}

function nameFormatter(user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(name); // "Oops"

someName; // "Tiffany"

// someOtherNameFormatter(someName); // "Oops"

function nameFormatter(userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"


//EXERCISE

//Overwrite the someUser.name value so that it says "Jordan" instead of "Blank".

// var someUser = {
//     name: 'Blank'
// };

// function changeName(user) {
//     return user.name = 'Jordan'; // write the code to overwrite someUser.name
// }

// changeName(someUser);

// Same As

// var someUser = {
//     name: 'Blank'
// };

// function changeName(user) {
//     return someUser.name = 'Jordan'; // write the code to overwrite someUser.name
// }

// changeName(someUser);