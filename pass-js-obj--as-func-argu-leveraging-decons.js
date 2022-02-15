// const user = {
//     name: 'Kristine',
//     email: 'kristine@devcamp.com'
//   }

//   const renderUser = ({ name, email }) => {
//     console.log(`${name}: ${email}`);
//   }

//   renderUser(user);


// Coding Exercise

// You need to check on your bank info but can't get the information to show up. Find the missing code and the one syntax error so the test can pass!


const bank = {
    accountNum: 454812259,
    name: 'John Doe',
    balance: 1257
}

const bankInfo = ({ accountNum, name, balance }) => {
    return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`);
}

bankInfo(bank);