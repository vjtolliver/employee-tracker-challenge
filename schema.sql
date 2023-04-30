CREATE DATABASE company_db;

USE company_db;

-- Departments Table

CREATE TABLE departments(
  id INT PRIMARY KEY NOT NULL,
  department_name VARCHAR(30) NOT NULL,
);

-- Roles Table

CREATE TABLE roles(
  id INT PRIMARY KEY NOT NULL,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT FOREIGN KEY NOT NULL,
);

-- Employees Table

CREATE TABLE employees(
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT FOREIGN KEY NOT NULL,
  manager_id INT FOREIGN KEY
);