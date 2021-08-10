var employees = [];

function Employees(name, job, salary, status) {
    this.name = name
    this.job = job
    this.salary = salary
    status = "Full Time"
    employees.push(name, job, salary, status)
}

var john = new Employees("John", "Software Engineer", "$3000")
var samantha = new Employees("Samantha", "Accountant", "$2000")
var chris = new Employees("Chris", "Manager", "$5000")

for (i = 0; i < employees.length; i++) {
    console.log(employees[i])
}


