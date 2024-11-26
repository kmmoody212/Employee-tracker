// Using code from a previous activity
// importing classes from other files
import inquirer from "inquirer";

// define the Cli class
class Cli {
  // Update the constructor to accept Truck and Motorbike objects as well
  constructor(entry: Employee[] | Department[] | Role[]) {
    this.entry = entry;
  }

  // method to add a new employee
  addEmployee(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "firstname",
          message: "Employee's First Name:",
        },
        {
          type: "input",
          name: "lastname",
          message: "Employee's Last Name:",
        },
        {
          type: "input",
          name: "department",
          message: "Employee's Department:",
        },
        {
          type: "input",
          name: "roleid",
          message: "Employee's Job Title:",
        },
      ])
      .then((answers) => {
        const newEmployee = new Employee(
          answers.firstname,
          answers.lastname,
          answers.department,
          answers.roleid,
          []
        );
        // push the car to the vehicles array
        this.entry.push(employee);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a new Department
  createDepartment(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "department",
          message: "Enter Department Name:",
        },
      ])
      .then((answers) => {
        const newDepartment = new Department(answers.department);
        // push the truck to the vehicles array
        this.vehicles.push(truck);

        this.selectedVehicleVin = truck.vin;

        this.performActions();
      });
  }

  // method to create a new role
  createRole(): void {
    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "Title of the new role:",
        },
        {
          type: "input",
          name: "salary",
          message: "Salary for this role:",
        },
        {
          type: "list",
          name: "department",
          message: "Select department for this role:",
          choices: this.entry.map((Department) => {
            return {
              name: `${Department.name}`,
            };
          }),
        },
      ])
      .then((answers) => {
        // Use the answers object to pass the required properties to the Role constructor
        const newrole = new Role(
          answers.title,
          parseInt(answers.salary),
          answers.department
        );
        // push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // perform actions on the motorbike
        this.performActions();
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Select an action",
          choices: [
            "View All Employees",
            "Add New Employee",
            "View All Roles",
            "Add New Role",
            "View All Departments",
            "Add New Department",
            "Exit",
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === "View All Employees") {
          // print the employees table
          return;
        } else if (answers.action === "Add New Employee") {
          // add a new employee
          this.addEmployee();
        } else if (answers.action === "View All Roles") {
          // print roles table
          return;
        } else if (answers.action === "Add New Role") {
          // add a new role
          this.createRole();
        } else if (answers.action === "View All Departments") {
          // print departments table
          return;
        } else if (answers.action === "Add New Department") {
          // add a new department
          this.createDepartment();
        } else if (answers.action === "Exit") {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the tables
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: "list",
          name: "CreateOrSelect",
          message:
            "Would you like to create a new vehicle or perform an action on an existing vehicle?",
          choices: ["Create a new vehicle", "Select an existing vehicle"],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === "Create a new vehicle") {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
