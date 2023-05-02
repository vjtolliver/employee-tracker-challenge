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

        if (response.taco === "View All Departments"){
            db.query('SELECT departments.id AS ID, department_name AS Departments FROM departments;', (err, results) => {
               // console.log("Selection Recieved");
                if (err) {
                    console.log(err);
                } else {
                    console.log("Selection Recieved"); 
                    console.table(results);
                }
            });
        } else if (response.taco === "View All Roles"){
            db.query('SELECT * FROM roles', (err, results) => {
                console.log(results)
                if (err) {
                    console.log(err);
                };
            });
        } else {
            console.log("didn't work");
        }
    }
nextQuestions();
});