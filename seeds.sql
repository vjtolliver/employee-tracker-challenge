INSERT INTO departments (department_name)
VALUES ("Human Resources"),
       ("Finance"),
       ("Marketing"),
       ("IT"),
       ("Operations Management");


INSERT INTO roles (job_title, salary, department_id)
VALUES ("Chief HR Officer", "125000.00", 1),
       ("Recruitment", "60900.00", 1), 
       ("Financial Analyst", "80750.00", 2),
       ("Accountant", "75000.00", 2),
       ("Chief Marketing Officer", "101000.75", 3),
       ("Social Media Marketing", "95000.89", 3),
       ("IT Manager", "130000.61", 4),
       ("Software Developer", "330912.00", 4),
       ("Operations Manager", "70000.00", 5),
       ("Administrative Assistant", "65000.23", 5);

ALTER TABLE employees MODIFY manager_id INT DEFAULT NULL;
INSERT INTO employees (first_name, last_name, department_id, role_id)
VALUES ("Ross", "Geller", 4, 8),
       ("Monica", "Geller", 1, 1),
       ("Chandler", "Bing", 2, 3),
       ("Phoebe", "Buffay", 4, 7),
       ("Joey", "Tribbiani", 1, 2),
       ("Rachel", "Green", 3, 6),
       ("Claire", "Dunphy", 5, 9),
       ("Phil", "Dunphy", 3, 5),
       ("Mitchell", "Pritchett", 2, 4),
       ("Cameron", "Tucker", 5, 10);

UPDATE employees
SET manager_id = 1
WHERE id = 4;

UPDATE employees
SET manager_id = 2
WHERE id = 5;

UPDATE employees
SET manager_id = 8
WHERE id = 6;

UPDATE employees
SET manager_id = 3
WHERE id = 9;

UPDATE employees
SET manager_id = 7
WHERE id = 10;