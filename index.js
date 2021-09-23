// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const { writeFile } = require('fs')
const generator = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    filter: (answer) => {
      let re = /\w+@\w+.\w+/
      if (re.test(answer)) return answer 
      else return null
    }
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Which license is this project going to use?',
    choices: ['MIT', 'Apache License 2.0', 'GNU General Public License', 'Creative Commons', 'none']
  },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, generator(data), () => console.log(`${fileName} generated!`))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      writeToFile('README.md', answers)
    })
      .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
