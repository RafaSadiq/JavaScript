// let playerOne = 'Tiffany';
// let playerTwo = 'Kristine';

// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

// [playerOne, playerTwo] = [playerTwo, playerOne];

// console.log(`
// Player One: ${playerOne}
// Player Two: ${playerTwo}
// `);

//Coding Exercise

//Inside the below function, swap the values of right lane and left lane.

function roadRage() {
    let rightLane = "Chevy";
    let leftLane = "Honda";

    [rightLane, leftLane] = [leftLane, rightLane];

    return (`That ${rightLane} and ${leftLane} won't pick a lane`)
}

roadRage();