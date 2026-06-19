
// Task 1: Traffic Signal Management

let signal = "red";

switch (signal.toLowerCase()) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}


// Task 2: Employee Attendance Report

for (let i = 1; i <= 30; i++) {
  console.log(`Employee ${i} Present`);
}


// Task 3: ATM Cash Withdrawal

let balance = 10000;

while (balance > 0) {
  balance -= 500;
  console.log(`Remaining Balance: ₹${balance}`);
}


// Task 4: College Admission Eligibility

let age = 20;
let percentage = 75;
let entranceExamPassed = true;

if (age >= 18) {
  if (percentage >= 70) {
    if (entranceExamPassed) {
      console.log("Admission Approved");
    } else {
      console.log("Rejected: Entrance Exam Not Passed");
    }
  } else {
    console.log("Rejected: Percentage Below 70");
  }
} else {
  console.log("Rejected: Age Below 18");
}


// Task 5: Food Delivery Status

function deliveryStatus(customerName, foodItem, deliveryAddress) {
  console.log(
    `${customerName}, your ${foodItem} has been delivered to ${deliveryAddress}`
  );
}

deliveryStatus("Arun", "Pizza", "Chennai");


// Task 6: Salary Processing System

function calculateSalary(basicSalary, allowance) {
  return basicSalary + allowance;
}

function calculateBonus(salary) {
  return salary * 0.1;
}

let salaryResult = calculateSalary(30000, 5000);
let bonus = calculateBonus(salaryResult);

console.log("Salary:", salaryResult);
console.log("Bonus:", bonus);

// Task 7: E-commerce Discount Engine

function applyDiscount(amount, callback) {
  let discountedAmount = amount - amount * 0.1;
  callback(discountedAmount);
}

function generateInvoice(finalAmount) {
  console.log(`Invoice Generated: ₹${finalAmount}`);
}

applyDiscount(10000, generateInvoice);

// Task 8: Promotional Offers

function* offerGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

let offers = offerGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);



// Task 9: Student Database Merge

let scienceStudents = ["Arun", "Kumar", "Priya"];
let commerceStudents = ["Ravi", "Meena", "John"];

let allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents);


// Task 10: Online Exam System

function calculateTotalMarks(studentName, ...marks) {
  let total = marks.reduce((sum, mark) => sum + mark, 0);
  console.log(`${studentName} Total Marks: ${total}`);
}

calculateTotalMarks("Arun", 80, 90, 75, 85);


// Task 11: Employee Profile

const employee = {
  name: "Arun",
  department: "IT",
  salary: 50000,
  experience: 3,
};

const { name, department, salary, experience } = employee;

console.log(name);
console.log(department);
console.log(salary);
console.log(experience);

// Task 12: Product Inventory Filter

const products = [
  { name: "Laptop", price: 60000, category: "Electronics" },
  { name: "Mouse", price: 800, category: "Electronics" },
  { name: "Phone", price: 25000, category: "Electronics" },
];

const expensiveProducts = products.filter(
  (product) => product.price > 5000
);

console.log(expensiveProducts);


// Task 13: Find First Premium Customer

const customers = [
  { name: "Ravi", purchase: 20000 },
  { name: "Arun", purchase: 60000 },
  { name: "Priya", purchase: 80000 },
];

const premiumCustomer = customers.find(
  (customer) => customer.purchase > 50000
);

console.log(premiumCustomer);


// Task 14: Company Expense Tracker

const expenses = [5000, 12000, 8000, 15000];

const totalExpense = expenses.reduce(
  (total, expense) => total + expense,
  0
);

console.log("Total Expense:", totalExpense);


// Task 15: Gaming Tournament Verification

const players = [
  { name: "Player1", age: 20 },
  { name: "Player2", age: 22 },
  { name: "Player3", age: 19 },
];

const allAdults = players.every((player) => player.age >= 18);

console.log(allAdults);


// Task 16: Job Portal Search

const candidates = [
  { name: "Arun", skills: ["HTML", "CSS"] },
  { name: "Kumar", skills: ["JavaScript", "React"] },
  { name: "Ravi", skills: ["Python"] },
];

const reactDeveloper = candidates.some((candidate) =>
  candidate.skills.includes("React")
);

console.log(reactDeveloper);


// Task 17: Mobile Number Validator

let mobileNumber = "9876543210";

let isValid =
  mobileNumber.length === 10 &&
  (mobileNumber.startsWith("6") ||
    mobileNumber.startsWith("7") ||
    mobileNumber.startsWith("8") ||
    mobileNumber.startsWith("9"));

console.log(isValid ? "Valid Mobile Number" : "Invalid Mobile Number");


// Task 18: URL Slug Generator

let title = "Learn JavaScript Complete Course";

let slug = title.toLowerCase().split(" ").join("-");

console.log(slug);


// Task 19: Employee Sorting Dashboard

const employees = [
  { name: "Arun", salary: 40000 },
  { name: "Kumar", salary: 60000 },
  { name: "Priya", salary: 50000 },
];

const highToLow = [...employees].sort(
  (a, b) => b.salary - a.salary
);

const lowToHigh = [...employees].sort(
  (a, b) => a.salary - b.salary
);

console.log("Highest to Lowest");
console.log(highToLow);

console.log("Lowest to Highest");
console.log(lowToHigh);


// Task 20: Movie Booking System

const movies = ["Avatar", "Leo", "Jailer"];

const bookingIds = movies.map((movie, index) => ({
  movie,
  bookingId: `BK${101 + index}`,
}));

console.log(bookingIds);