// class Instructor {
//     constructor({ name }) {
//         this.name = name;
//     }
// }

// const jon = new Instructor({ name: 'Jon Snow' });
// console.log(jon.name);



// Coding Exercise

// Create a class, named Account, that has properties for a username and password. Then instantiate a new object called user and set the username and password to whatever strings you like.

class Account {
    constructor({ username, password }) {
        this.username = username
        this.password = password

    }
}

const rafa = new Account({ username: 'kirito', password: '1q2w3e4r5t' });
console.log(rafa); //?