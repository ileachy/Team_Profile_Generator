// node dependancies
const inquirer = require("inquirer");
const fs = require("fs");
const makeTeam = require("./src/template");
// lib dependancies
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Answer array
const teamData = [];

// Questions for Team Data
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  // If manager get Office Number
  if (answers.role === "Manager") {
    const managerQ = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number",
        name: "officeNum",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerQ.officeNum
    );
    teamData.push(newManager);

    // If Engineer get GitHub Username
  } else if (answers.role === "Engineer") {
    const githubQ = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubQ.github
    );
    teamData.push(newEngineer);

    // If Intern  get School
  } else if (answers.role === "Intern") {
    const internQ = await inquirer.prompt([
      {
        type: "input",
        message: "What school do you attend?",
        name: "school",
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internQ.school
    );
    teamData.push(newIntern);
  }
};

async function promptQuestions() {
  await questions();

  const addTeamMember = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a member", "Create Team Profile"],
      message: "What would you like to do next?",
    },
  ]);

  if (addTeamMember.addMember === "Add a member") {
    return promptQuestions();
  }
  return createTeam();
}

promptQuestions();

function createTeam() {
  fs.writeFileSync("./dist/index.html", makeTeam(teamData));
}
