// We recognize that there is a hole is this code logic covering ages 11 -15. As was discussed in the lesson this does happen.
// Try playing with the code and fixing the hole in the logic for practice.
var age = 30;

if (age <= 10) {
    console.log("You can eat from the kid's menu");
    console.log("You are not old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
    console.log("You can not eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are not old enough to rent a car");
} else if (age >= 25) {
    console.log("You can not eat from the kid's menu");
    console.log("You are old enough to drive");
    console.log("You are old enough to rent a car");
}


// EXERCISE

function kid() {
    age = 15;

    if (age <= 15) {
        console.log("You are not old enough to get a permit")
    } else if (age >= 15) {
        console.log("You are old enough to get a permit")
    } else {
        console.log("But not old enough to get a License")
    }
    return true;

}