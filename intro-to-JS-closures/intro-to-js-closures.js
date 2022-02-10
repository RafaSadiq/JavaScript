function battingAverage() {
    var hits = 100;
    var atBats = 300;

    return {
        getCurrentAverage: function() {
            return (hits / atBats);
        },
        updateHitsAndAtBats: function(hit, atBat) {
            hits += hit;
            atBats += atBat;
        }
    }
}

var altuve = battingAverage();
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(0, 20);
console.log(altuve.getCurrentAverage());


//EXERCISE

//Take the variable roomOne and call the function on it to return the seats remaining.

function movieTheater() {
    var seats = 50;
    var seatsSold = 28;

    return {
        remainingSeats: function() {
            return (seats - seatsSold)
        }
    }
}

var roomOne = movieTheater()

// call the remainingSeats method of the instace of movieTheater