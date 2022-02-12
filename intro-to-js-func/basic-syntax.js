function hiThere() {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

storedText; // undefined

var storedTextTwo = hiThereTwo();

storedTextTwo; // "Hi there again"

EXERCISE

//Create a function called greeting that returns a string when the function is called.

// function greeting() {
//     console.log("greeting")
//     return 'My String;'
// }
// greeting();