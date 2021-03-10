// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a discription of your project.',
    },
    {
        type: 'input',
        name: 'instilation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Is there any usage information?',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the contribution guidlines for this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for this project?',
    },
    {
        type: 'input',
        name: 'gitHub',
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

        var html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
          <title>ReadMe Generator</title>
        </head>
        <body>
          <div id="profile">
            <h1> ${data.projectTitle}</h1>
            <h3> ${data.description}</h3>
            <h3> ${data.instalation}</h3>
          </div>
          
          <script type="text/javascript" src="index.js"></script>
        </body>
        </html>`;
        
        fs.writeFile('index.html', html, function (err) {
            if (err) console.log(err)
        })
    });
// .then((myAnswers) => {
//     const htmlPage = generateHTML(myAnswers);

//     fs.writeFile('index.html', htmlPage, function(err) {
//         if (err) console.log(err)
//     });
// });
