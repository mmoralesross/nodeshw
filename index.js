var inquirer = require('inquirer');
var fs = require ("fs")
var generateMarkDown = require ('./generateMarkdown')


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your project about?",
        name: "description"
    },
    {
        type: "input",
        message: "How would you use this app?",
        name: "usage"
    },
    {
        type: "input",
        message: "How do you install the app?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do you make contributions?",
        name: "contributions"
    },
    {
        type: "input",
        message: "Tests",
        name: "tests"
    },
    {
        type: "input",
        message: "Please enter your github username",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email",
        name: "email"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', function(error){
        
        if (error) {
            console.log (error)
        } else {
            console.log ("Your 'readme' was created.")
        }
        
    });
}

// function to initialize program
function init() {
inquirer.prompt (questions).then(function(data){
    console.log (data)
    var markDown = generateMarkDown (data)
   writeToFile ("GENREADME.md",markDown);
})

}

// function call to initialize program
init();
