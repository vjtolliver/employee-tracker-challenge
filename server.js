const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');
const PORT = process.env.PORT || 3001;




const mainQuestion = [
{
    type: 'list',
    name: 'taco',
    choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee", "Quit"],
    message: 'What would you like to do?',

}
]


inquirer.prompt (mainQuestion)
.then((response) => {
    console.log(response);
    

    function nextQuestions(taco) {

        const db = mysql.createConnection(
                    {
                      host: 'localhost',
                      user: 'root',
                      password: 'Passwordpassword',
                      database: 'company_db'
                    },
                    console.log(`Connected to the company_db database.`)
                 );

        if (response.taco === "View All Departments") {
            db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
               // console.log("Selection Recieved");
                if (err) {
                    console.log(err);
                } else {
                    console.log("Selection Recieved"); 
                    console.table(results);
                }
            });
        } else if (response.taco === "View All Roles") {
            db.query('SELECT departments.department_name AS Department, roles.job_title AS Title, roles.salary AS Salary, roles.id AS ID FROM departments JOIN roles ON roles.department_id = departments.id;', (err, results) => {
                //console.log(results)
                if (err) {
                    console.log(err);
                } else {
                    console.log("Selection Recieved"); 
                    console.table(results);
                };
            });
        } else if (response.taco === "View All Employees") {
                db.query('SELECT employees.id AS ID, employees.first_name AS First, employees.last_name AS Last, roles.job_title AS Title, departments.department_name, roles.salary AS Salary, employees.manager_id AS ManagerID FROM employees JOIN departments ON employees.department_id = departments.id JOIN roles ON employees.role_id = roles.id ORDER BY employees.id;', (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        console.table(results);
                    }
                });
        } else if (response.taco === "Add A Department") {
            const addDpmnt = [
                {
                    type: 'input',
                    name: 'departmentadd',
                    message: 'What is the name of the Department?',
                },
            ];
            
                inquirer.prompt(addDpmnt)
                .then((response) => {
                    console.log(`${response.departmentadd}`)
                db.query(`INSERT INTO departments (department_name) VALUES ("${response.departmentadd}");`, (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`New Department, "${response.departmentadd}", Recieved.`); 
                        // list = new DynamicList([options])
                        //         choices: ["Human Resources", "Finance", "Marketing", "IT", "Operations Management"]
                        // list.run().then(answer) => console.log(answer);
                                //console.table(results);
                    }
                });
            });
        } else if (response.taco === "Add A Role") {

            const dpmntList = db.query(`SELECT roles.department_id FROM roles;`, (err, results) => {
                if (err) {
                    console.log(err)
                }
                // } else {
                //     console.log(results);
                // };
            });

            const addRole = [
                {
                    type: 'input',
                    name: 'titleadd',
                    message: 'What is the name of the Role?',
                },
                {
                    type: 'number',
                    name: 'salaryadd',
                    message: 'What is the salary?',
                },
                // {
                //     type: 'input',
                //     name: 'dpmntadd',
                //     // choices: ["Human Resources", "Finance", "Marketing", "IT", "Operations Management"],
                //     message: 'Which department does it belong to?',
                // },
                {
                    type: 'number',
                    name: 'didadd',
                    message: 'What is the departments ID?',
                },
            ];

            inquirer.prompt(addRole)
            .then((response) => {
                //console.log(`${response.roleadd}`)

                // if (response.dpmntadd === "Human Resources")
                // const num = 1
                //  if (response.didadd = dpmntList) {
                //      console.log(response.didadd) }
                db.query(`INSERT INTO roles (job_title, salary, department_id) VALUES ("${response.titleadd}", "${response.salaryadd}", ${response.didadd});`, (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        //console.table(results);
                    }
                });
            });

        
     } else if (response.taco === "Add An Employee") {

        const addEmp = [
            {
                type: 'input',
                name: 'firstname',
                message: 'What is their first name?',
            },
            {
                type: 'input',
                name: 'lastname',
                message: 'What is their last name?',
            },
            {
                type: 'number',
                name: 'did',
                message: 'What is the departments ID?',
            },
            {
                type: 'number',
                name: 'rid',
                message: 'What is the roles ID?',
            },
        ];

        inquirer.prompt(addEmp)
        .then((response) => {

                db.query(`INSERT INTO employees (first_name, last_name, department_id, role_id) VALUES ("${response.firstname}", "${response.lastname}", ${response.did}, ${response.rid});`, (err, results) => {
                   
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        console.table(results);
                    }
                });
            });
        } else if (response.taco === "Update An Employee") {
                db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        console.table(results);
                    }
                });
        } else if (response.taco === "Delete An Employee") {
                db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        console.table(results);
                    }
                });
            } else if (response.taco === "Quit") {
                db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved. Session Ended"); 
                        return;
                    }
                });
        } else {
            console.log("didn't work");
        }
    }
nextQuestions();
})