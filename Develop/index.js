// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What module number is this?',
'What was the subject matter this week?',
'What is the name of the challenge?',
'What is your GitHub username?',
'What is the Github repository\'s name?',
'Describe the function of this program.',
'What are some skills used in this challenge?',
'Was this challenge written from scratch or was it refactored?',
'What is your name?',];

//  * generateREADME
// #region
const generateREADME = ({moduleNum, subject, challengeName, github, repo, skills, description, scratchOrRefactored, name}) =>
`# Module ${moduleNum} | ${subject} Challenge | ${challengeName}

## Finished Product

### [🔗Project Link](https://${github}.github.io/${repo}/) 
${description}

This project was developed using the following skills: ${skills}

This page is responsive to resizing and the code is well annotated.

All code ${scratchOrRefactored} by ${name}.

### The following is an image of the final product:
![Image URL](.assets/images/preview.png)

## Assignment Information

### User Story
\`\`\`
ADD USER STORY HERE
\`\`\`

### Acceptance Criteria
\`\`\`
ADD ACCEPTANCE CRITERIA HERE
\`\`\`
### Mock-Up
![Image URL](./assets/images/mockup.png)

### Grading Criteria
ADD GRADING CRITERIA HERE
`;
// #endregion

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'number',
      name: 'moduleNum',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'subject',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'challengeName',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'github',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'repo',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[5],
    },
    {
      type: 'checkbox',
      name: 'skills',
      message: questions[6],
      choices: ['HTML', 'CSS', 'JS', 'Web APIs', 'Third-Party APIs', 'Server-Side APIs', 'Node.js']
    },
    {
      type: 'list',
      name: 'scratchOrRefactored',
      message: questions[7],
      choices: ['written from scratch', 'refactored']
    },
    {
      type: 'input',
      name: 'name',
      message: questions[8],
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);
    fs.writeFile('yourREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log(`Successfully created a new read me file called 'yourREADME.md'
Be sure to add the Assignment Information manually.`)
    );
  });
}

// Function call to initialize app
init();