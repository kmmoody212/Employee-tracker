SELECT name, title, salary
FROM departments
JOIN roles
ON departments.id = roles.department_id
ORDER BY departments.name;

SELECT e.id, e.first_name, e.last_name, e.role_id, roles.title, roles.salary, roles.department_id, departments.name
FROM employees e employee_db
JOIN roles on e.role_id = roles.id
JOIN departments on roles.department_id = departments.id;