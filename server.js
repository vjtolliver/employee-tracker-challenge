const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');
const PORT = process.env.PORT || 3001;

//  const db = mysql.createConnection(
//        {
//          host: 'localhost',
//          user: 'root',
//          password: 'Passwordpassword',
//          database: 'company_db'
//        },
//        console.log(`Connected to the company_db database.`)
//     );


const mainQuestion = [
{
    type: 'list',
    name: 'taco',
    choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee"],
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
                    
                }
            ]
                db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        console.table(results);
                    }
                });
        } else if (response.taco === "Add A Role") {
                db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
                   // console.log("Selection Recieved");
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        console.table(results);
                    }
                });
        } else if (response.taco === "Add An Employee") {
                db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
                   
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Selection Recieved"); 
                        console.table(results);
                    }
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
});