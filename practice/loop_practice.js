//Task_1
//Employee Salary Calculator Scenario

let basicSalary=25000;
let HRA=basicSalary*0.20;
let bonus=basicSalary*0.10;
let totalSalary=(basicSalary+HRA+bonus) ;
let tax=totalSalary*0.05;

let finalSalary=totalSalary-tax;


console.log("Basic Salary :", basicSalary);
console.log("HRA :", HRA);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);


