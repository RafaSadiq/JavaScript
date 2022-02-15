// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Basic Error</title>
//   </head>
//   <body>

//   </body>

//   <script>
//     function siteComponent(func) {
//       return func();
//     }
//     widget = () => {
//       return '<div>Hi there</div>';
//     }
//     try {
//       console.log(siteComponent('oops'));
//     } catch(e) {
//       console.log('An error occurred', e);
//     }
//     console.log(siteComponent(widget));
//   </script>
// </html>


// Code Exercise

// There are 2 syntax errors in the below code. 
// Find and fix them to make the test pass.

function adminActions(func) {
    return func();
}

buttons = () => {
    return '<button>Admin Dashboard</button>';
}

try {
    console.log(adminActions(buttons));
} catch (error) {
    console.log('No admin is logged in', error);
}