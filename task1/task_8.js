// Task 1

const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

console.log(employees.filter(emp => emp.salary > 40000));
console.log(employees.find(emp => emp.salary > 60000));
console.log(employees.reduce((sum, emp) => sum + emp.salary, 0));
console.log(employees.map(emp => emp.name));


// Task 2

function checkAdmission(name, age, percentage) {
  return age >= 18 && percentage >= 60
    ? `${name} Admission Approved`
    : `${name} Admission Rejected`;
}

console.log(checkAdmission("Rahul", 19, 75));


// Task 3

const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

console.log(cart.reduce((sum, item) => sum + item.price * item.qty, 0));
console.log(cart.reduce((max, item) => item.price > max.price ? item : max));
console.log(cart.map(item => item.product));


// Task 4

const signal = "red";

switch (signal) {
  case "red":
    console.log("Stop - Fine ₹500");
    break;
  case "yellow":
    console.log("Ready - Fine ₹200");
    break;
  case "green":
    console.log("Go - No Fine");
    break;
  default:
    console.log("Invalid Signal");
}


// Task 5

const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

console.log(students.filter(s => s.mark >= 50));
console.log(students.filter(s => s.mark < 50));

console.log(
  students.map(s => ({
    ...s,
    grade:
      s.mark >= 90 ? "A+" :
      s.mark >= 75 ? "A" :
      s.mark >= 50 ? "B" : "Fail"
  }))
);


// Task 6

function placeOrder(customerName, ...items) {
  console.log(customerName);
  console.log(items);
  console.log(items.length);
}

placeOrder("Rahul", "Pizza", "Burger", "Juice");


// Task 7

let balance = 1000;

function deposit(amount) {
  return balance += amount;
}

function withdraw(amount) {
  return amount <= balance ? balance -= amount : "Insufficient Balance";
}

function checkBalance() {
  return balance;
}

console.log(deposit(500));
console.log(withdraw(300));
console.log(checkBalance());


// Task 8

const bookedSeats = ["A1", "A2", "B1"];

function checkSeat(seat) {
  console.log(bookedSeats.includes(seat) ? "Booked" : "Available");
}

checkSeat("A1");
checkSeat("B2");

for (let seat of bookedSeats) {
  console.log(seat);
}


// Task 9

function validateUser(username, password, email) {
  if (username.includes(" ")) return "Username contains spaces";
  if (password.length < 8) return "Password too short";
  if (!email.includes("@")) return "Invalid Email";
  return "Valid User";
}

console.log(validateUser("rahul123", "password123", "rahul@gmail.com"));


// Task 10

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    products.forEach(p => console.log(p.title));
    console.log(products.filter(p => p.price > 1000));
    console.log(products.length);
  });


// Task 11

const dob = new Date("2000-08-15");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log(dob.getDate());
console.log(dob.getMonth() + 1);
console.log(dob.getFullYear());
console.log(days[dob.getDay()]);


// Task 12

const plan = "Premium";

console.log(
  plan === "Mobile" ? "Mobile Only" :
  plan === "Basic" ? "HD Streaming" :
  plan === "Standard" ? "Full HD + 2 Screens" :
  plan === "Premium" ? "4K + 4 Screens" :
  "Invalid Plan"
);


// Task 13

const patients = [
  { id: 1, name: "Rahul", status: "Critical" },
  { id: 2, name: "Kavin", status: "Normal" },
  { id: 3, name: "John", status: "Critical" }
];

console.log(patients.filter(p => p.status === "Critical"));
console.log(patients.find(p => p.id === 2));
console.log(patients.length);


// Task 14

const inventory1 = [{ id: 1, product: "Laptop" }];
const inventory2 = [{ id: 2, product: "Mouse" }];

const mergedInventory = [...inventory1, ...inventory2];

const { id, product } = mergedInventory[0];

console.log(mergedInventory);
console.log(id);
console.log(product);

const updatedInventory = [
  ...mergedInventory,
  { id: 3, product: "Keyboard" }
];

console.log(updatedInventory);


// Task 15

let group = ["Rahul", "Kavin", "John"];

group.push("David");
group.pop();
group.unshift("Admin");
group.shift();
group.splice(1, 0, "Priya");

console.log(group);
console.log(group);