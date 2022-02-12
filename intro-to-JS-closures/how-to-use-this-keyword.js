var guide = {
    title: 'Guide to Programming',
    content: 'Content goes here...',
    visibleToUser: function(viewingUserRole) {
        if (viewingUserRole === 'paid') {
            return true;
        } else {
            return false;
        }
    },
    renderContent: function(userRole) {
        if (this.visibleToUser(userRole)) {
            console.log(this.title + " - " + this.content);
        } else {
            this.content = '';
            console.log(this.title + " - " + this.content);
        }
    }
}

user = { role: 'paid' };
guide.renderContent(user.role);


//Coding Exercise

//Use 'this' to run the code and determine how many seats are left.

// var seats = {
//     seats: 50,
//     seatsSold: 28,
//     remainingSeats: function(){
//       return (this.seats - this.seatsSold)
//       },
//     enoughSeats: function(){
//       if(this.remainingSeats() > 0){
//         return // use this and seats to return the number of seats left.
//       }
//     }
//   }


//   seats.enoughSeats()