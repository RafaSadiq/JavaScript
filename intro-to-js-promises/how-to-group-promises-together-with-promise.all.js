// const { code } = require("esutils");

// const greeting = new Promise((resolve, reject) =>{
//     resolve('Hi there');
//     reject('Oops, bad greeting');
//   });

// const updateAccount = new Promise((resolve, reject) => {
//     resolve('Updating last login...');
//     reject('Error updating account with login.');
//   });

// const loginActivities = Promise.all([greeting, updateAccount]);  

// const loginActivities = Promise.all([greeting, updateAccount]);
// console.log(loginActivitites);  // [object Promise] {}

// loginActivities.then(res => {

// })

// loginActivities.then(res => {
//     res.forEach(activity => {
//       console.log(activity);
//     })
//   })


// code
const greeting = new Promise((resolve, reject) => {
    resolve('Hi there');
    reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating last login...');
    reject('Error updating account with login.');
});

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
    res.forEach(activity => {
        console.log(activity);
    })
})