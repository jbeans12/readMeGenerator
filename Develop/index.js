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
        message: 'Please give a discription of your project:',
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'What are the installation instructions if any?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?',
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "GPL",
            "ISC",
            "Mozilla"
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributors on this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Is there a test for this project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What should I do if I have problems with this project?'
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
    }

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
          <div class="container">
            <h1 class="h1"> Project Title: ${data.projectTitle}</h1>
            <p class="h2"> Project Description: <small class="text-muted"> ${data.description}</small></p>
            <p class="h2"> Instalation Instructions: <small class="text-muted"> ${data.instalation}</small></p>
            <p class="h2"> Usage Information: <small class="text-muted"> ${data.usage}</small></p>
            <p class="h2"> Contribution Guidelines: <small class="text-muted"> ${data.contribution}</small></p>
            <p class="h2"> Test Instructions: <small class="text-muted"> ${data.test}</small></p>
            <p class="h2"> Questions?${data.questions}</p>
            <ul class="list-group"> 
                <li class="list-group-item">GitHub Link:${data.gitHub}</li> 
                <li class="list-group-item">Email link:${data.email}</li>
          </div>
          
          <script type="text/javascript" src="index.js"></script>
        </body>
        </html>`;
        
        fs.writeFile('index.html', html, function (err) {
            if (err) console.log(err)
        })
 }); 
    

 

//  // TODO: Create a function to write README file
//  function writeToFile(fileName, data) {
//      fs.writeFile(fileName, data, err => {
//          if (err) {
//              return console.log(err);
//          }
//          console.log("Your ReadMe.md file has been generated!")
//      });
//  }

 
// // TODO: Create a function to initialize app
// function init() {
   

// };

// // Function call to initialize app
// init();

    
