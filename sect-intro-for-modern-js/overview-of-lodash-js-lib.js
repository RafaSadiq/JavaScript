// Starter Code:

// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Lodash Demo</title>
//     <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js"></script>
//   </head>
//   <body>
//   </body>

//   <script>
//   </script>
// </html>


// Guide Code

// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Lodash Demo</title>
//     <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js"></script>
//   </head>
//   <body>
//     <!-- http://houston.astros.mlb.com/stats/sortable.jsp?c_id=hou#playerType=ALL&elem=%5Bobject+Object%5D&tab_level=child&click_text=Sortable+Player+hitting&game_type='R'&season=2017&season_type=ANY&league_code='MLB'&sectionType=sp&statType=hitting&page=1&ts=1516406323861&sortColumn=g&sortOrder='desc'&extended=0 -->
//   </body>

//   <script>
//     // times
//     randNumber = () => {
//       return Math.round(Math.random() * 100);
//     }

//     const sampleNumbers = _.times(5, randNumber);

//     // filter
//     const players = [
//       { name: 'Bregman, A',  battingAverage: 0.284 },
//       { name: 'Altuve, J',   battingAverage: 0.346 },
//       { name: 'Springer, G', battingAverage: 0.283 },
//       { name: 'Gurriel, Y',  battingAverage: 0.299 },
//       { name: 'Gonzalez, M', battingAverage: 0.303 }
//     ];

//     const over300 = _.filter(players, player => {
//       return player.battingAverage > 0.300;
//     });
//   </script>
// </html>


// _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// // → { 'a': 1, 'b': 2 }
// _.partition([1, 2, 3, 4], n => n % 2);
// // → [[1, 3], [2, 4]]

// in a browser:
{ /* <script src="lodash.js"></script> */ }

// using npm:
// $ npm i -g npm
// $ npm i --save lodash

// // Load the full build.
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');

// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');

// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');