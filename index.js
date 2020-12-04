var inquirer = require('inquirer');
var generateMarkDown = require ('./utils/generateMarkdown')


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
    }
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
    var markDown = 
})

}

// function call to initialize program
init();
