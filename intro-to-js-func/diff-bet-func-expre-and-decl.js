var greeting = function() {
    return "Hi there!";
};

console.log(greeting());

var age = 4;

if (age <= 10) {
    var buildMenu = function() {
        return "Kids' Menu";
    };

    function wrongMenuBuilder() {
        return "Wrong Kids' Menu";
    }

    console.log(buildMenu());
    console.log(wrongMenuBuilder());
}

//EXERCISE

//Build a function expression called myFunction and have it return true

// var myFunction = function() {
//     return 'True';
// }