// Task 1
let employeeName = "Balaji";
let salary = 30000;
let experience = 4;
let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

let finalSalary = salary + bonus;

console.log("Employee:", employeeName);
console.log("Final Salary:", finalSalary);


// Task 2
let studentName = "Kavin";
let age = 18;
let percentage = 75;

if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}


// Task 3
let menu = 2;

switch (menu) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;
    case 2:
        console.log("Order Confirmed : Burger");
        break;
    case 3:
        console.log("Order Confirmed : Shawarma");
        break;
    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;
    default:
        console.log("Invalid Selection");
}


// Task 4
let students = [
    "Rahul",
    "Kavin",
    "John",
    "Priya",
    "Anu",
    "Divya",
    "Arun",
    "Vicky",
    "Keerthi",
    "Siva"
];

for (let student of students) {
    console.log(student);
}

console.log("Total Students:", students.length);


// Task 5
let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

let total = 0;
let expensive = cart[0];

cart.forEach(item => {
    console.log(item.product);
    total += item.price;

    if (item.price > expensive.price) {
        expensive = item;
    }
});

console.log("Total Cart Value:", total);
console.log("Most Expensive Product:", expensive.product);


// Task 6
let balance = 10000;

function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Remaining Balance:", balance);
}

deposit(5000);
withdraw(3000);
checkBalance();


// Task 7
let personAge = 25;

if (personAge < 5) {
    console.log("Free Ticket");
} else if (personAge <= 18) {
    console.log("Ticket Price: ₹100");
} else if (personAge <= 60) {
    console.log("Ticket Price: ₹200");
} else {
    console.log("Ticket Price: ₹120");
}


// Task 8
let purchase = 4500;
let discount = 0;

if (purchase > 5000) {
    discount = purchase * 0.20;
} else if (purchase > 3000) {
    discount = purchase * 0.10;
} else if (purchase > 1000) {
    discount = purchase * 0.05;
}

let finalAmount = purchase - discount;

console.log("Original Amount:", purchase);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);


// Task 9
let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Bread", "Butter");
inventory.shift();
inventory.pop();

console.log(inventory.includes("Milk"));
console.log("Final Inventory:", inventory);


// Task 10
let patient = {
    patientName: "Ravi",
    age: 45,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

for (let key in patient) {
    console.log(key, ":", patient[key]);
}

let { patientName, age: patientAge, disease, doctor } = patient;

console.log(patientName);
console.log(patientAge);
console.log(disease);
console.log(doctor);


// Task 11
function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);


// Task 12
function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


// Task 13
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

let totalSalary = 0;
let highestSalary = employees[0];

employees.forEach(emp => {
    console.log(emp.name);
    totalSalary += emp.salary;

    if (emp.salary > highestSalary.salary) {
        highestSalary = emp;
    }
});

console.log("Total Salary Expense:", totalSalary);
console.log("Highest Salary Employee:", highestSalary.name);


// Task 14
let totalSeats = 50;

function bookSeats(seats) {
    if (seats <= totalSeats) {
        totalSeats -= seats;
        console.log(seats + " seats booked");
        console.log("Available Seats:", totalSeats);
    } else {
        console.log("Seats Unavailable");
    }
}

bookSeats(10);
bookSeats(45);


// Task 15
let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let selectedProducts = ["Mobile", "Headphone"];
let totalBill = 0;

selectedProducts.forEach(item => {
    totalBill += products[item];
});

let gst = totalBill * 0.18;
let finalBill = totalBill + gst;

console.log("Selected Products:", selectedProducts);
console.log("Total Amount:", totalBill);
console.log("GST 18%:", gst);
console.log("Final Bill:", finalBill);