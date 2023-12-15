// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What module number is this?',
'What was the subject matter this week?',
'What is the name of the challenge?',
'Leave a link to the completed project.',
'What are some skills used in this challenge?',
'Was this challenge written from scratch or was it refactored?',
'What is your name?',
'What is the User Story for this challenge?',
'What is the Acceptance Criteria for this challenge?',
'What is the Grading Criteria for this challenge?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

//  * generateREADME
// #region
const generateREADME = ({moduleNum, subject, challengeName, link, skills, scratchOrRefactored, name, userStory, acceptanceCriteria, gradingCriteria}) =>
`# Module 4 | Web APIs Challenge | Code Quiz

## Finished Product

### [🔗Project Link](https://tylerfruik.github.io/Frontend-Quiz/)
This project involved the same use of HTML, CSS, and JS that we have experienced in previous weeks with the addition of WebAPI calls and advanced functions.

This page is responsive to resizing and the code is well annotated.

This repository contains the HTML, CSS, and JS files as well as all necessary images in the /assets/ folder.

All code written manually by Tyler Fruik

### The following is an image of the final webpage:
![Image URL](.assets/images/preview.png)

## Assignment Information

### User Story
\`\`\`
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
\```

### Acceptance Criteria
\`\`\`
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
\`\`\`
### Mock-Up
![Image URL](./assets/images/mockup.gif)

### Grading Criteria

#### Technical Acceptance Criteria: 40%
- Satisfies all of the above acceptance criteria.

#### Deployment: 32%
- Application deployed at live URL.
- Application loads with no errors.
- Application GitHub URL submitted.
- GitHub repository contains application code.

#### Application Quality: 15%
- Application user experience is intuitive and easy to navigate.
- Application user interface style is clean and polished.
- Application resembles the mock-up functionality provided in the Challenge instructions.

#### Repository Quality: 13%
- Repository has a unique name.
- Repository follows best practices for file structure and naming conventions.
- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- Repository contains multiple descriptive commit messages.
- Repository contains a quality README file with description, screenshot, and link to deployed application.

## Bugs to still be squashed:
`;
// #endregion

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'input',
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
      name: 'link',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'skills',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'scratchOrRefactored',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'name',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'userStory',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'acceptanceCriteria',
      message: questions[8],
    },
    {
      type: 'input',
      name: 'gradingCriteria',
      message: questions[9],
    }
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your new README.md file!')
    );
  });
}

// Function call to initialize app
init();