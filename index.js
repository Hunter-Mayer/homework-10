const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const createHTML = require('./src/template')
const fs = require('fs')
let team = []


function start() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the manager\'s name?',
        name: 'managerName'
    },{
        type: 'input',
        message: 'What is the manager\'s id?',
        name: 'managerId'
    },{
        type: 'input',
        message: 'What is the manager\'s email?',
        name: 'managerEmail'
    },{
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'managerON'
    }]).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerON)
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.egineerGithub)
        const intern = new Intern (data.internName, data.internId, data.internEmail, data.internSchool)
        team.push(manager)
        team.push(engineer)
        team.push(intern)
        console.log(createHTML(team)) //this should be last
    })
}


function createIntern() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the intern\'s name?',
        name: 'internName'
    },{
        type: 'input',
        message: 'What is the intern\'s id?',
        name: 'internId'
    },{
        type: 'input',
        message: 'What is the intern\'s email?',
        name: 'internEmail'
    },{
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'internSchool'
}])
}

function createEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the engineer\'s name?',
        name: 'engineerName'
    },{
        type: 'input',
        message: 'What is the engineer\'s id?',
        name: 'engineerID'
    },{
        type: 'input',
        message: 'What is the engineer\'s email?',
        name: 'engineerEmail'
    },{
        type: 'input',
        message: 'What is the engineer\'s github username?',
        name: 'egineerGithub'
}])
}



start()