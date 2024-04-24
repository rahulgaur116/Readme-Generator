// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Enter the title of your project:'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Enter Content Details by Page Number:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage details for your project:'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Enter Licensing information for your project:',
        choices: ['License1', 'License2.', 'License3', 'None']
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Enter details of contributors for your project:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter testing criterion for your project:'
    },
    {
        type: 'input',
        name: 'GitHub Username',
        message: 'Enter your github username:'
     
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter any questions you have for your project:'
        
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Successfully generated ${fileName}`);
        }
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // Generate README content based on user responses
        const readmeContent = `# ${answers.title}\n\nDescription: ${answers.description}\n\nInstallation: ${answers.installation}\n`;

        // Write README content to a file
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        console.log('An error occurred:', error);
    });

}

// Function call to initialize app
init();
