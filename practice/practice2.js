// Task 1 
// variable , comparision , logical, ternary operator
let mark=75;
let minMark=35;

let result= minMark <= 34 ? "pass" : "fail";

let grade=mark >=90? "Grade A":
          mark >=75? "Grade B":
          mark >=60? "Grade C":
          "No Grade";

            console.log("Result : " , result);
            console.log("Grade : " , grade);


// Task 2 employee Bonus Calculation
// Arithmatic , assignment operator 

let salary=25000;
let bonus= salary*0.10;
let finalSalary= salary + bonus;

console.log("Original Salary : " , salary);
console.log("Bonus : " , bonus);
console.log("Final Salary : " , finalSalary);

// Task 3 User Login Validation
// Logical Operator

let email = "admin@gmail.com";
let password = "12345";
 
let login=(email==="admin@gmail.com" ? "login sucess" : "login failed" )&& (password==="12345" ? "login sucess" : "login failed");

console.log(login)

// Task 4 product discount calculator
// Arthmatic , Ternary

let price =2000;

let discount= price >= 1000 ? price - (price*0.20) : price;

console.log(discount);

// Task 5  Array Product Management
//Array

let products = ["laptop", "Mouse", "Keyboard",]

console.log("First Product :", products[0]);
console.log("Last Product :", products[products.length - 1]);
console.log(products.length);

// Task 6 Employee Object
//Object

let employee = { name:"Bala",
                 department: "Development",
                 salary:30000

}

console.log(employee);
console.log(employee.name);
console.log(employee.salary);

// Task 7 E-Commerce Cart Total
// Arthmetic Operators

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let amount1=shirt + pant + shoe;
let discount1=amount1*0.10;
let finalAmount1=amount1-discount1;

console.log("Total Amount : " , amount1);
console.log("Discount Amount : " , discount1);
console.log("Final Amount : " , finalAmount1);

// Task 8 Eligibility Checker
// Comparison Operatror

let age =18;

let checkAge=age>=18 ? "Eligible for Voting" : " Not Eligible";

console.log("Result : " , checkAge);

// Task 9 Increment Decrement Practice
//pre/post Increment

let a = 10;

a++;
console.log(a);
++a;
console.log(a);
a--;
console.log(a);
--a;
console.log(a);

// Task 10 Mini Employee Attendance System
// Boolean, logical Operator

let isPresent=true;
let completedTask=true;

let result1= isPresent === completedTask ? "Eligible for Salary" : "Not Eligible";

console.log("Employee Status For Salary :" , result1);

// Bonus Company level Task
// Employee Management console app

let employee2= {
    id:101,
    name:"Bala",
    department:"Development",
    salary:35000,
    experience:2
}
let bonus1 = employee2.salary*0.10;
let finalSalary1=bonus1+employee2.salary;
let rating=4.5;
let performance= rating>=3.5 ? "Good" : "Bad";

console.log("Employee ID :" , employee2.id);
console.log("Employee Name :" , employee2.name);
console.log("Department :" , employee2.department);
console.log("Salary :" ,employee2.salary);
console.log("Experience :" ,employee2.experience);
console.log("bonus :", bonus1);
console.log("Final Salary :", finalSalary1);
console.log("Performance Status :" , performance);

console.log(`balaji`);














