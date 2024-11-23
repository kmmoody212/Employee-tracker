INSERT INTO departments (name)
VALUES ('General Management'),
       ('Office'),
       ('Sales'),
       ('Accounting'),
       ('Customer Service');

INSERT INTO roles (title, salary, department_id)
VALUES ('Regional Manager', 275000, 1),
       ('Sales Lead', 100000, 3), 
       ('Salesperson', 80000, 3),
       ('Senior Accountant', 160000, 4),
       ('Accountant', 125000, 4),
       ('HR Manager', 150000, 2),
       ('Customer Service', 60000, 5),       
       ('Receptionist', 50000, 2);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 1, null),
       ('Dwight', 'Schrute', 3, 1),
       ('Jim', 'Halpert', 3, 1),
       ('Pam', 'Beesly', 8, 1),
       ('Andy', 'Bernard', 2, 1),
       ('Stanley', 'Hudson', 3, 2),
       ('Phyllis', 'Vance', 3, 2),
       ('Kevin', 'Malone', 5, 4),
       ('Angela', 'Martin', 4, 1),
       ('Oscar', 'Martinez', 5, 4),
       ('Toby', 'Flenderson', 6, null),
       ('Kelly', 'Kapoor', 7, 1);