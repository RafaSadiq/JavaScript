var players = [
    'Altuve',
    'Bregman',
    'Correa',
    'Springer'
];

for (player in players) {
    console.log(players[player]);
}

for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
}

players.forEach(function(element) {
    console.log(element);
});


//   Coding Exercise

//   Create an array called "members" with 5 elements. Write a traditional for loop that uses an iterator and iterates through the array and console logs each member

var members = ['mem_1', 'mem_2', 'mem_3', 'mem_4', 'mem_5'];

// for (member in members) {
//     console.log(member);
//     console.log(members[member]);
// }

// output
// 0
// mem_1
// 1
// mem_2
// 2
// mem_3
// 3
// mem_4
// 4
// mem_5

//---------------------------------------------

// for (var i = 0; i < members.length; i++) {
//     console.log(members[i]);
// }

// output
// mem_1
// mem_2
// mem_3
// mem_4
// mem_5

//---------------------------------------------

// members.forEach(function(element) {
//     console.log(element);
// })

// output
// mem_1
// mem_2
// mem_3
// mem_4
// mem_5

//---------------------------------------------
//---------------------------------------------

aarr = ['hello', 'world', 'my', 'coding', 'skills', 'are', 'on', 'the', 'point', 'today']

// for (let i = 0; i < aarr.length; i++) {
//     console.log('first element only: ', aarr[0]);
// }

// output

//10 index.js:30 first element only:  hello

//---------------------------------------------------------------

// for (let i = 0; i < aarr.length; i++) {
//     console.log('elements but 0-9 index based: ', i);
// }

// output

// elements but 0-9 index based:  0
// elements but 0-9 index based:  1
// elements but 0-9 index based:  2
// elements but 0-9 index based:  3
// elements but 0-9 index based:  4
// elements but 0-9 index based:  5
// elements but 0-9 index based:  6
// elements but 0-9 index based:  7
// elements but 0-9 index based:  8
// elements but 0-9 index based:  9


// //-----------------------------------------------------------------

// aarr = ['hello', 'world', 'my', 'coding', 'skills', 'are', 'on', 'the', 'point', 'today']

// for (let i = 0; i < aarr.length; i++) {
//     console.log('elements of array 1-10: ', aarr[hello]);
// }