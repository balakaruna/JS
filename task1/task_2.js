let marks = 75;


let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result :", result);


if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("No Grade");
}




let salary = 25000;
let bonus = salary * 0.10;
let finalSalary = salary + bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);



let email = "admin@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345") {
    console.log("Login Success");
}
else {
    console.log("Login Failed");
}



let price = 2000;

let finalPrice = price > 1000 
    ? price - (price * 0.20)
    : price;

console.log("Final Amount :" + finalPrice);




let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product :" + products[0]);
console.log("Last Product :" + products[products.length - 1]);
console.log("Total Products :" + products.length);

let employee = {
    name: "Naveen",
    department: "Development",
    salary: 30000
};

console.log("Employee Details :" + JSON.stringify(employee));
console.log("Employee Name :" + employee.name);
console.log("Salary :" + employee.salary);




let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let discount = totalBill * 0.10;
let finalAmount = totalBill - discount;

console.log("Total Bill :" + totalBill);
console.log("Discount :" + discount);
console.log("Final Amount :" + finalAmount);




let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
}
else {
    console.log("Not Eligible");
}




let a = 10;

a++;
console.log("After a++ :" + a);

++a;
console.log("After ++a :" + a);

a--;
console.log("After a-- :" + a);

--a;
console.log("After --a :" + a);


let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
}
else {
    console.log("Not Eligible");
}



let employeeData = {
    id: 101,
    name: "John",
    department: "Development",
    salary: 35000,
    experience: 2
};

console.log("Employee ID :" + employeeData.id);
console.log("Employee Name :" + employeeData.name);
console.log("Department :" + employeeData.department);
console.log("Salary :" + employeeData.salary);
console.log("Experience :" + employeeData.experience + " Years");


let empBonus = employeeData.salary * 0.10;
let empFinalSalary = employeeData.salary + empBonus;

console.log("Bonus :" + empBonus);
console.log("Final Salary :" + empFinalSalary);


let performance = employeeData.experience >= 2
    ? "Good"
    : "Average";

console.log("Performance Status :" + performance);