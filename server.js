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

function mainMenu() {
    inquirer
    .prompt([
    {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        ],
    },
    ])
    .then((answers) => {
        console.log(answers);
        if (answers.userChoice === "View all departments") {
            viewDepartments();
            //presented with a formatted table showing department names and department ids
        }
        if (answers.userChoice === "View all roles") {
            viewRoles();
            //presented with the job title, role id, the department that role belongs to, and the salary for that role
        }
        if (answers.userChoice === "View all employees") {
            viewEmployees();
            //presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
        }
        if (answers.userChoice === "Add a department") {
            addDepartment();
        }
        if (answers.userChoice === "Add a role") {
            addRole();
        }
        if (answers.userChoice === "Add an employee") {
            addEmployee();
        }
        if (answers.userChoice === "Update an employee role") {
            updateEmployeeRole();
        }
        });
    };

    const viewDepartments = () => {
        // Query database
        db.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.log(results);
        console.table(rows);
        mainMenu();
        });
    };

    const viewRoles = () => {
        db.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        console.log(results);
        console.table(rows);
        mainMenu();
        });
    };
    
    const viewEmployees = () => {
        db.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        console.log(results);
        console.table(rows);
        mainMenu();
        });
    };

    function addDepartment () {
        const sql = `SELECT dept_name FROM departments`;
        db.query(sql, (err, rows) => {
            if (err) {
            console.log(err.message);
            }
            console.table(rows);
        });
    }
    

    function addRole () {
        const sql = `SELECT role_title FROM roles`;
        db.query(sql, (err, rows) => {
            if (err) {
            console.log(err.message);
            }
            console.table(rows);
        });
    }
    
    function addEmployee () {
        const sql = `SELECT role_title FROM roles`;
        db.query(sql, (err, rows) => {
            if (err) {
            console.log(err.message);
            }
            console.table(rows);
        });
    }
    
    function updateEmployee () {
        const sql = `SELECT role_title FROM roles`;
        db.query(sql, (err, rows) => {
            if (err) {
            console.log(err.message);
            }
            console.table(rows);
        });
    }
    