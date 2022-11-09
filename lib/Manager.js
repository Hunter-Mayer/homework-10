const Employee = require('./Employee')
// import Employee from './Employee'
class Manager extends Employee  {

    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

const abc = new Manager('abc', 1 , 'abc@abc.com', 002)


module.exports = Manager