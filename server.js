const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

 const db = mysql.createConnection(
     {
       host: 'localhost',
       user: 'root',
       password: 'Passwordpassword',
       database: 'company_db'
     },
     console.log(`Connected to the company_db database.`)
   );


const mainQuestion = [
    {
        type: 'list',
        name: 'queryto',
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee"],
        message: 'What would you like to do?',

    }
]

inquirer.prompt (mainQuestion)
.then((response) => {
    function 
})