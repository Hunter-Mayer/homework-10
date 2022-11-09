function generateTeam(team) {
  
    const genManager = manager => {
        return `
        <h2> ${manager.getName()}</h2>
        `
    }    
    const genEngineer = engineer => {
        return `
        <h2> ${engineer.getName()}</h2>
        `
    }


team.filter(employee => employee.getRole() === 'Manager').map(manager => genManager(manager))




}









module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${generateTeam(team)}
    </body>
    </html>
    `
}