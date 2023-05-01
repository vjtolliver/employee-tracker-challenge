<!-- // View all Departments
    //DB Query to show departments table (SELECT * FROM departments)

// View all Roles
    // DB Query to show roles table (SELECT * FROM roles, departments_names + ?)

// View all Employees
    //DB Query to show employee (Select * FROM employee, roles_id + ?)

// Add a Departmemt
    // Create seperate prompts (const addDep)
        // Enter name of Department 
            // fs write file to seeds.sql to insert new department to departments table
            // DB Query to show all departments

// Add a Role
    //Create seperate prompts (const addRoles)
        //Enter Role Name
        // Enter Salary
        // Enter Department the role belongs to (array/list dynamically generated?)
            // fs write file to seeds.ql to insert new role to roles table
            // DB Query to show all roles

// Add an Employee
    // Create seperate prompts (const addEmp)
        //Enter first name
        // Enter last name
        // Enter role (array/list dynamically generated?)
        // Enter employee's Manager
            //fs write file to seeds.sql to insert new employee into employee table
            //DB Query to show all employees

// Update Employee Role
    // Create seperate prompts (const updEmp)
        // Select Employee (array/list dynamicall generated)
        // Enter employee's new role
            // fs write file to seeds.sql to update? employee role in employee table
            // DB Query to show all employees -->

.then((response) => {
    function nextQuestions(response) {
        if (response.queryto === "View All Departments"){
            db.query(`SELECT * FROM departments`, (err, result) => {
                if (err) {
                    console.log(err);
                };
            });
        } else if (response.queryto === "View All Roles"){
            db.query('SELECT * FROM roles', (err, results) => {
                if (err) {
                    console.log(err);
                };
            });
        };
    };
    });