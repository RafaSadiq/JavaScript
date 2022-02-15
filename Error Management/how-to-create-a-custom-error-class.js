// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>Error Management in JavaScript</title>
//   </head>
//   <body>
//   </body>

//   <script>
//     class DevcampError extends Error {
//       constructor(msg = 'An error occurred', ...params) {
//         super(...params);

//         this.msg = msg;
//       }
//     }


//     function siteComponent(func) {
//       return func();
//     }

//     try {
//       console.log(siteComponent('oops'));
//     } catch(e) {
//       throw new DevcampError('DevcampError', e);
//     }

//     widget = () => {
//       return '<div>Hi there</div>';
//     }
//   </script>


// Coding Exercise

// Write a class called SocialMediaError that extends Error. 
// It will also need a constructor with 2 arguments,
// one for the msg and the params. Be sure to create the msg property 
// within the constructor. 
// (Don't worry about writing the try and catch, etc. Just write the class)

class SocialMediaError extends Error {
    constructor(msg = 'Error was seen', ...params) {
        super(...params);

        this.msg = msg;
    }
}