// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
// TODO: Create an array of questions for user input
const init = () => {
 inquirer.prompt([
    {
        type: 'input' ,
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project.',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter the Table of Contents:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations did you use?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your application?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter your license here:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution instructions here:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing :',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter any questions for your application',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your githib link!',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email for any questions',
    },
  ])

  .then((answers) => {
    generateREADME(answers);
  })
  .catch((err) => {
    console.error(err);
  });
};

const generateREADME = (answers) => {
    // Define the content of the README.md file based on user input
    const readmeContent = `
  ## Project Name

  ${answers.projectName}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Github](#github)
- [Email](#email)
  ${answers.tableOfContents}
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  ${answers.license}
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.tests}

  ## Questions

  ${answers.questions}
  For questions about this repo you can contact me on ${answers.email}
  Or you can reach me on my github: ${answers.github}
`;

 // Write the README.md file
 fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md file created!');
  });
};


// Function call to initialize app
init();

