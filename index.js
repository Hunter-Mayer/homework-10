const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const createHTML = require('./src/template')
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
        team.push(manager)
        console.log(createHTML(team)) //this should be last
    })
}


function createIntern() {
    console.log('Intern inquirer code')
}
start()