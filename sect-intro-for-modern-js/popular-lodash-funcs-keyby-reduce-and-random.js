// < !DOCTYPE html >
//     <
//     html >
//     <
//     head >
//     <
//     meta charset = "UTF-8" >
//     <
//     title > Lodash Demo < /title> <
//     script src = "https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js" > < /script> <
//     /head> <
//     body >
//     <
//     /body>

// <
// script >
//     // keyBy
//     const roster = [
//         { position: '3B', name: 'Bregman, A' },
//         { position: '2B', name: 'Altuve, J' },
//         { position: 'CF', name: 'Springer, G' },
//         { position: '1B', name: 'Gurriel, Y' },
//         { position: 'LF', name: 'Gonzalez, M' }
//     ]

// const positions = _.keyBy(roster, 'position');

// const secondBase = positions['2B'];

// // reduce
// const sum = _.reduce([1, 2, 3], function(total, num) {
//     return total + num;
// }, 0);

// const homerunStats = [
//     { name: 'Bregman, A', hr: 19 },
//     { name: 'Altuve, J', hr: 24 },
//     { name: 'Springer, G', hr: 34 },
//     { name: 'Gurriel, Y', hr: 18 },
//     { name: 'Gonzalez, M', hr: 23 }
// ];

// const totalHomeruns = _.reduce(homerunStats, function(total, player) {
//     return total + player.hr;
// }, 0);

// const links = [
//     "https://google.com",
//     "https://devcamp.com",
//     "https://airbnb.com"
// ];

// const webLinks = _.reduce(links, function(content, link) {
//     return `<a href='${link}'>${link}</a><br>`.concat(content);
// }, '');

// // random
// lodashRandNumber = () => {
//     return _.random(1, 100);
// }

// const lodashSampleNumbers = _.times(5, lodashRandNumber);

// console.log(lodashSampleNumbers); <
// /script> <
// /html>