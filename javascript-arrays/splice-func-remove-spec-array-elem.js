// var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

// var foundElement = arr.indexOf('Correa');

// foundElement; // 2

// arr.splice(foundElement, 1); // ["Correa"]

// arr; // ["Altuve", "Bregman", "Springer"]

// arr.splice(1, 2); // ["Bregman", "Springer"]

// arr; // ["Altuve"]

//Coding Exercise
//Use the method splice on the array to leave the first 3 values in the array, and have the splice return "Springer".

var array = ['Altuve', 'Bregman', 'Correa', 'Springer'];
array.splice(4, 4)
console.log(array)

// var arr = ['ricky', 'mike', 'keith', 'wally', 'mario', 'adam', 'rafa'];
// arr.splice(1,2)
// console.log(arr)
// arr.splice(1,2,'WWJSD')
// console.log(arr)
// arr.splice(1,-1,'WWJSD'
// console.log(arr)
// arr.splice(1, 2, 'WWSJ', '???', 3, 4, 5)
// console.log(arr)