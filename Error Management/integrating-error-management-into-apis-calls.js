// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>API Communication Demo</title>
//   </head>
//   <body>

//   </body>

//   <script>
//     class ApiError extends Error {
//       constructor(msg = 'An api error occurred', ...params) {
//         super(...params);
//         this.msg = msg;
//       }
//     }
//     var request = new XMLHttpRequest();
//     request.open('GET', 'http://api.dailysmarty.com/oops', true);
//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         var data = JSON.parse(request.responseText);
//         console.log(data);
//       } else {
//         throw new ApiError('ApiError', `An API error occurred with a status code of ${request.status}`);
//       }
//     };
//     request.send();
//   </script>
// </html>