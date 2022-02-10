var dataPoint = {};

switch (typeof dataPoint) {
    case "string":
        console.log("It's a string");
        break;
    case "number":
        console.log("It's a number");
        break;
    case "boolean":
        console.log("It's a boolean");
        break;
    default:
        console.log('No matches');
}

// EXERCISE

//Write a switch statement that always returns: "number"
function switchStatement() {

    var num = 10;

    switch (typeof num) {
        case "number":
            return "number"
    }

}

switchStatement();