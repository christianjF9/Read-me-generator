// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const readme = require('./utils/generateMarkdown')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promtQuestions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is The projects title (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Enter a description for the project',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please Enter a description for the project!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'enter installation instructions',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter installation instructions!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'enter usage information',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter usage information!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'enter contribution guidelines',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter contribution guidelines!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'test',
            message: 'enter test instructions',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter test instructions!');
                return false;
              }
            }
          },
 //         {
 //           type: 'input',
 //           name: 'licence',
//            message: 'which licence should the project have',
 //           choices: ['mit', 'gnu','none'],
//            validate: nameInput => {
//              if (nameInput) {
//                return true;
//              } else {
//                console.log('Please enter a valid option!');
//                return false;
//              }
//            }
//          }
    ]);
}
const questions = [];

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}

// TODO: Create a function to initialize app
function init() {
    //writeToFile('a','a');  
    promtQuestions().then(answers => {
        writeToFile(generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
