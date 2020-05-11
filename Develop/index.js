const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: "Please enter your Project Title?",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter your Project Title?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'author',
            message: "Please enter your github user Name?",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter your github user Name?");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address?",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter your email address?");
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'Description',
            message: "Please describe about project",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter description");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'ConfirmInstallation',
            message: 'Would you like to add Installation Steps?',
            default: true
            
        },
        {
            type: 'editor',
            name: 'InstallationSteps',
            message: "Please enter Installation Steps?",
            when: ({ ConfirmInstallation }) => ConfirmInstallation
        },
        {
            type: 'confirm',
            name: 'ConfirmUsage',
            message: 'Would you like to add Usage Steps?',
            default: true
            
        },
        {
            type: 'editor',
            name: 'Usage',
            message: "Please enter usage details?",
            when: ({ ConfirmUsage }) => ConfirmUsage
        },
        {
            type: 'confirm',
            name: 'ConfirmCredit',
            message: 'Would you like to add Credit Steps?',
            default: true
            
        },
        {
            type: 'editor',
            name: 'Credit',
            message: "Please enter Credit details:",
            when: ({ ConfirmCredit }) => ConfirmCredit
        },
        {
            type: 'confirm',
            name: 'ConfirmLicense',
            message: 'Would you like to add License details?',
            default: true
            
        },
        /*{
            type: 'editor',
            name: 'license',
            message: "Please enter license details:",
            when: ({ ConfirmLicense }) => ConfirmLicense
        },
        {
            type: 'confirm',
            name: 'ConfirmBadges',
            message: 'Would you like to add Badge details?',
            default: true

        },*/
        {
            type: 'list',
            name: 'badgeName',
            message: 'Which License badge name you want to give?',
            choices: ['MIT', 'GNU GPLv3'],
            filter: function(val) {
              return val.toLowerCase();
            }
          },
        {
            type: 'confirm',
            name: 'ConfirmContributions',
            message: 'Would you like to add Contribution details?',
            default: true
        },
        {
            type: 'editor',
            name: 'Contribution',
            message: "Please enter Contribution details:",
            when: ({ ConfirmContributions }) => ConfirmContributions
        },
        {
            type: 'confirm',
            name: 'ConfirmTest',
            message: 'Would you like to add Test details?',
            default: true
        },
        {
            type: 'editor',
            name: 'Test',
            message: "Please enter Test details:",
            when: ({ ConfirmTest }) => ConfirmTest
        }
    ]);
};
        



// function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) =>{
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve ({
                ok: true,
                message : 'File Created'
            });
            }
        )}
    );
};

// function to initialize program
function init() {
    questions()
    /*.then( answers => {
        console.log(answers);
    })*/
    .then (answers => {
        return generateReadme(answers);
    })
    .then(pageReadMe => {
        writeToFile('../README.md',pageReadMe);
    })
    .catch(err => {
        console.log(err);
      })
};

// function call to initialize program
init();
