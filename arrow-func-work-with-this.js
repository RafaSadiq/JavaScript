// function Invoice(subTotal) {
//     this.taxRate = 0.06;
//     this.subTotal = subTotal;

//     this.total = setInterval(() => {
//         console.log((this.taxRate * this.subTotal) + this.subTotal);
//         // console.log(this);
//     }, 2000);
// }

// const inv = new Invoice(200);
// Invoice(subTotal);


//Coding Exercise

//This code snippet represents an unfinished savings calculator. Your goal is to calculate 30 percent of this month's paycheck, totaled at $2000. Pass the paycheck amount in the correct spot and instantiate the object in order to return the correct deposit amount.

function savingCalc(payCheck) {
    this.percent = 0.30;
    this.payCheck = payCheck;

    this.deposit = function() {
        console.log((this.deposit * this.payCheck) + this.deposit);
        // return (this.percent * this.payCheck)
    }
}

const piggyBank = savingCalc();