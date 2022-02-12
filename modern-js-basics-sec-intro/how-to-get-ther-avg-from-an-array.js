const arr = [1, 2, 3, 4, 5, 6]
const avg = arr => {
    const reducer = (total, value) => total + value;
    const total = arr.reduce(reducer);
    return total / arr.length;
};

avg(arr); //?