// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'project title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a discription of your project.',
    },
    {
        type: 'input',
        name: 'instilation instructions',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Is there any usage information?',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the contribution guidlines for this project?',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'What are the test instructions for this project?',
    },
    {
        type: 'input',
        name: 'gitHub username',
        message: 'What is your gitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

 ])
 .then((data) => {
     console.log(data)
//      var html = `<!DOCTYPE html>
//      <html lang="en">
//      <head>
//        <meta charset="UTF-8">
//        <meta http-equiv="X-UA-Compatible" content="IE=edge">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Document</title>
//      </head>
//      <body>
//        <div id="profile">
         
//        </div>
       
//        <script type="text/javascript" src="index.js"></script>
//      </body>
//      </html>`;
//  })

//  fs.writeFile(index.html, html, function (err) {
//      if (err) console.log(err)
 })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
