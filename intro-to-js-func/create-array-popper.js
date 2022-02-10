class ArrayPopper {
    constructor(arr) {
        this.arr = arr;
        this.atBeginning = true;
    }

    togglePopper() {
        this.atBeginning = !this.atBeginning;
        // return this.atBeginning ? this.arr.pop() : this.arr.shift();
        console.log(this.atBeginning ? this.arr.pop() : this.arr.shift())
    }
}

const ap = new ArrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?

const strap = new ArrayPopper(['Hi', 'there', 'from', 'JS']);

strap.togglePopper(); //? Hi
strap.togglePopper(); //? 'there'
strap.arr; // [ 'there', 'from']
strap.togglePopper(); //? 'from'
strap.togglePopper(); //? 'JS'