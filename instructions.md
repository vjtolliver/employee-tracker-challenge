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

Good And Final:
    SELECT departments.department_name AS Department, roles.job_title AS Title, roles.salary AS Salary, roles.id AS ID FROM departments JOIN roles ON roles.department_id = departments.id;


    SELECT employees.id AS ID, employees.first_name AS First, employees.last_name AS Last, roles.job_title AS Title, departments.department_name, roles.salary AS Salary, employees.manager_id AS ManagerID FROM employees JOIN departments ON employees.department_id = departments.id JOIN roles ON employees.role_id = roles.id ORDER BY employees.id; 
    
    SELECT employees.id, employees.manager_id FROM employees.id, employees.manager_id WHERE employees.id <> employees.manager_id AND employees.id = employees.manager_id;

    SELECT employee.manager_ AS Manager FROM employees JOIN employees ON employees.manager_id = employees.id;