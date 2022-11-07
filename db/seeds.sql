INSERT INTO departments (dept_name)
VALUES
('Engineering'),
('Finance'),
('Marketing'),
('Sales'),
('Human Resources');

INSERT INTO roles (role_title, role_salary, department_id)
VALUES
('Senior Software Engineer', 120000, 1),
('Financial Analyst', 100000, 2),
('SEO Specialist', 80000, 3),
('Business Development Manager', 110000, 4),
('HR Co-Ordinator', 100000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Wick', 1, 6),
('Peter', 'Parker', 7, 10),
('Bruce', 'Wayne', 3, 88),
('Clark', 'Kent', 100 , 30);
