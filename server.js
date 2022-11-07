var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

// Connect to database
const db = mysql.createConnection(
    {
    host: "localhost",
    // MySQL username,
    user: "root",
    password: "password",
    database: "companyXYZ_db",
    },
    console.log(`Connected to the companyXYZ_db database.`)
);

db.connect (err => {
    if (err) throw err;
    console.log ('Database Connected!');
    employee_tracker();
});

function employee_tracker() {
    inquirer.prompt ({
        type: 'list',
        name: 'home',
        message: 'What would you like to do?',
        choices: ['View all departments', 
        'View all roles', 
        'View all employees', 
        'Add a role', 
        'Add an employee', 
        'Update an employee', 
        'Exit']
    })
    .then (
        ({home}) => {
            
        }
    )
}
