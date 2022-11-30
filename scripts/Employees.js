import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};

// create a new event listener to show how many products were sold by each person
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  // go through all the employees IFF the clicked item is an employee
  if (itemClicked.id.startsWith("employee")) {
    // get the employee primary key
    const [, employeeId] = itemClicked.id.split("--");
    // use the employee PK to get the employee name
    let employeeName = "";
    for (const employee of employees) {
      if (employee.id == employeeId) {
        employeeName = employee.name;
      }
    }

    let totalOrders = 0;
    /* 
      go through all the orders, and increment the total orders
      when you find one that matches the employee
    */
    for (const order of orders) {
      if (order.employeeId == employeeId) {
        totalOrders++;
      }
    }
    // display an alert with the employees name and how many products they sold
    window.alert(`${employeeName} sold ${totalOrders} products`);
  }
});
