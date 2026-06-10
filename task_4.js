let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else if (age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}


let salary = Number(prompt("Enter your salary:"));
let hike = 0;

if (salary < 20000) {
    hike = salary * 0.20;
} else if (salary <= 50000) {
    hike = salary * 0.10;
} else {
    hike = salary * 0.05;
}

console.log("Old Salary: ₹" + salary);
console.log("New Salary: ₹" + (salary + hike));


let units = Number(prompt("Enter units consumed:"));
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Electricity Bill: ₹" + bill);


let balance = 10000;
let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Funds");
}


let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}


let recharge = Number(prompt("Enter recharge amount:"));

if (recharge >= 499) {
    console.log("Netflix Offer");
} else if (recharge >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}


let signal = prompt("Enter Signal Color (Red/Yellow/Green):");

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
}


let workingDays = Number(prompt("Enter working days:"));
let presentDays = Number(prompt("Enter present days:"));

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance: " + attendance + "%");

if (attendance >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


let ticketPrice = 500;
let tickets = Number(prompt("Enter number of tickets:"));

let total = ticketPrice * tickets;
let gst = total * 0.05;
let finalAmount = total + gst;

console.log("Total Amount: ₹" + total);
console.log("GST: ₹" + gst);
console.log("Final Amount: ₹" + finalAmount);


let foodCost = Number(prompt("Enter Food Cost:"));
let finalBill = foodCost;

if (foodCost > 2000) {
    finalBill -= foodCost * 0.10;
}

console.log("Final Bill: ₹" + finalBill);


let policeAge = Number(prompt("Enter Age:"));
let height = Number(prompt("Enter Height:"));
let weight = Number(prompt("Enter Weight:"));

if (policeAge >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected: Weight less than 55");
        }
    } else {
        console.log("Rejected: Height less than 160");
    }
} else {
    console.log("Rejected: Age less than 18");
}


let s1 = Number(prompt("Enter Subject 1 Mark:"));
let s2 = Number(prompt("Enter Subject 2 Mark:"));
let s3 = Number(prompt("Enter Subject 3 Mark:"));
let s4 = Number(prompt("Enter Subject 4 Mark:"));
let s5 = Number(prompt("Enter Subject 5 Mark:"));

let totalMarks = s1 + s2 + s3 + s4 + s5;
let percentage = totalMarks / 5;

console.log("Total: " + totalMarks);
console.log("Percentage: " + percentage + "%");

if (percentage >= 90) {
    console.log("Grade A+");
} else if (percentage >= 80) {
    console.log("Grade A");
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


let time = Number(prompt("Enter Time (24hr format):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else {
    console.log("Night Shift");
}


let loanAge = Number(prompt("Enter Age:"));
let loanSalary = Number(prompt("Enter Salary:"));
let experience = Number(prompt("Enter Experience:"));

if (loanAge >= 21 && loanSalary >= 25000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


let distance = Number(prompt("Enter Distance in KM:"));
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Cab Fare: ₹" + fare);


let number = Number(prompt("Enter a Number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


let passLength = Number(prompt("Enter Password Length:"));

if (passLength < 6) {
    console.log("Weak");
} else if (passLength <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}


let exp = Number(prompt("Enter Experience:"));
let empSalary = Number(prompt("Enter Salary:"));
let bonus = 0;

if (exp <= 2) {
    bonus = empSalary * 0.05;
} else if (exp <= 5) {
    bonus = empSalary * 0.10;
} else {
    bonus = empSalary * 0.20;
}

console.log("Bonus: ₹" + bonus);


let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");


let degree = prompt("Degree Completed? (yes/no)");
let communication = prompt("Communication Skill (good/bad)");
let techScore = Number(prompt("Technical Score:"));

if (degree.toLowerCase() === "yes") {
    if (communication.toLowerCase() === "good") {
        if (techScore >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Technical Score below 70");
        }
    } else {
        console.log("Rejected: Communication Skill not Good");
    }
} else {
    console.log("Rejected: Degree Not Completed");
}