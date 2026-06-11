// ==========================
// TASK 1 - STUDENT MANAGEMENT SYSTEM
// ==========================

let students = [
  { id: 1, name: "Arun", department: "CSE", mark: 95 },
  { id: 2, name: "Kavin", department: "ECE", mark: 82 },
  { id: 3, name: "Rahul", department: "IT", mark: 67 },
  { id: 4, name: "Ajay", department: "MECH", mark: 45 },
  { id: 5, name: "Vijay", department: "CIVIL", mark: 88 }
];

let totalMarks = 0;

for (let student of students) {
  console.log(student.name);
  totalMarks += student.mark;

  if (student.mark >= 90) {
    console.log(student.name + " Grade: A");
  } else if (student.mark >= 75) {
    console.log(student.name + " Grade: B");
  } else if (student.mark >= 50) {
    console.log(student.name + " Grade: C");
  } else {
    console.log(student.name + " Grade: Fail");
  }

  if (student.mark > 80) {
    console.log(student.name + " scored above 80");
  }
}

console.log("Total Marks:", totalMarks);

function studentDetails(student) {
  console.log(student);
}

studentDetails(students[0]);

// ==========================
// TASK 2 - EMPLOYEE PAYROLL SYSTEM
// ==========================

let employees = [
  { id: 1, name: "Ravi", salary: 25000, department: "HR" },
  { id: 2, name: "Suresh", salary: 45000, department: "IT" },
  { id: 3, name: "Manoj", salary: 32000, department: "Finance" }
];

let totalSalary = 0;

for (let emp of employees) {
  console.log(emp.name);
  totalSalary += emp.salary;

  if (emp.salary > 30000) {
    console.log(emp.name + " earns above 30000");
  }

  switch (emp.department) {
    case "HR":
      console.log("Human Resource");
      break;
    case "IT":
      console.log("Information Technology");
      break;
    case "Finance":
      console.log("Finance Department");
      break;
    default:
      console.log("Unknown Department");
  }
}

console.log("Total Salary Expense:", totalSalary);

function payroll(callback) {
  callback();
}

payroll(function () {
  console.log("Payroll Report Generated");
});

// ==========================
// TASK 3 - ONLINE FOOD ORDER SYSTEM
// ==========================

let foods = [
  { id: 1, foodName: "Pizza", price: 350, category: "FastFood" },
  { id: 2, foodName: "Burger", price: 180, category: "FastFood" },
  { id: 3, foodName: "Biryani", price: 250, category: "MainCourse" }
];

let totalFoodPrice = 0;

for (let food of foods) {
  console.log(food.foodName);
  totalFoodPrice += food.price;

  if (food.price > 200) {
    console.log(food.foodName + " above 200");
  }

  switch (food.category) {
    case "FastFood":
      console.log("Quick Food");
      break;
    case "MainCourse":
      console.log("Heavy Meal");
      break;
    default:
      console.log("Other Category");
  }
}

console.log("Total Menu Value:", totalFoodPrice);

function orderConfirmation(callback) {
  callback();
}

orderConfirmation(function () {
  console.log("Order Confirmed");
});

// ==========================
// TASK 4 - MOVIE TICKET BOOKING SYSTEM
// ==========================

let movies = [
  { movieName: "Leo", ticketPrice: 150, availableSeats: 20 },
  { movieName: "Vikram", ticketPrice: 180, availableSeats: 0 },
  { movieName: "Master", ticketPrice: 120, availableSeats: 10 }
];

let totalSeats = 0;

for (let movie of movies) {
  console.log(movie.movieName);
  totalSeats += movie.availableSeats;

  if (movie.availableSeats > 0) {
    console.log("Booking Available");
  } else {
    console.log("House Full");
  }
}

console.log("Total Seats:", totalSeats);

function booking(callback) {
  callback();
}

booking(function () {
  console.log("Booking Confirmed");
});

// ==========================
// TASK 5 - HOSPITAL PATIENT RECORDS
// ==========================

let patients = [
  { patientId: 1, patientName: "Raj", age: 65, disease: "Heart" },
  { patientId: 2, patientName: "Kumar", age: 45, disease: "Fever" }
];

for (let patient of patients) {
  console.log(patient.patientName);

  if (patient.age > 60) {
    console.log(patient.patientName + " above age 60");
  }

  switch (patient.disease) {
    case "Heart":
      console.log("Cardiology");
      break;
    case "Fever":
      console.log("General Medicine");
      break;
    default:
      console.log("Other Department");
  }
}

function appointment(callback) {
  callback();
}

appointment(function () {
  console.log("Appointment Confirmed");
});

// ==========================
// TASK 6 - LIBRARY MANAGEMENT SYSTEM
// ==========================

let books = [
  { bookId: 1, bookName: "JS Basics", author: "John", price: 600 },
  { bookId: 2, bookName: "HTML Guide", author: "Smith", price: 450 }
];

let totalBookValue = 0;

for (let book of books) {
  console.log(book.bookName);
  totalBookValue += book.price;

  if (book.price > 500) {
    console.log(book.bookName + " above 500");
  }
}

console.log("Total Book Value:", totalBookValue);

function issueBook(bookName) {
  console.log(bookName + " issued");
}

issueBook("JS Basics");

// ==========================
// TASK 7 - E-COMMERCE PRODUCT DASHBOARD
// ==========================

let products = [
  { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
  { productId: 2, productName: "Mouse", price: 500, stock: 20 }
];

let inventory = 0;

for (let product of products) {
  console.log(product.productName);
  inventory += product.price * product.stock;

  if (product.stock < 10) {
    console.log(product.productName + " low stock");
  }

  if (product.stock > 0) {
    console.log("In Stock");
  } else {
    console.log("Out of Stock");
  }
}

console.log("Inventory Value:", inventory);

function report(callback) {
  callback();
}

report(function () {
  console.log("Product Report Generated");
});

// ==========================
// TASK 8 - COLLEGE ADMISSION SYSTEM
// ==========================

let applicants = [
  { name: "Arun", age: 19, percentage: 75, department: "CSE" },
  { name: "Raj", age: 17, percentage: 80, department: "ECE" }
];

let eligibleCount = 0;

for (let student of applicants) {
  console.log(student.name);

  if (student.age >= 18 && student.percentage >= 60) {
    console.log("Eligible");
    eligibleCount++;
  } else {
    console.log("Not Eligible");
  }
}

console.log("Eligible Students:", eligibleCount);

function admission(callback) {
  callback();
}

admission(function () {
  console.log("Admission Confirmed");
});

// ==========================
// TASK 9 - BUS RESERVATION SYSTEM
// ==========================

let passengers = [
  { passengerId: 1, name: "Ajay", seatNumber: 12, ticketPrice: 500 },
  { passengerId: 2, name: "Vijay", seatNumber: 15, ticketPrice: 500 }
];

let collection = 0;

for (let passenger of passengers) {
  console.log(passenger.name);
  collection += passenger.ticketPrice;
  console.log("Seat Occupied:", passenger.seatNumber);
}

console.log("Total Collection:", collection);

function ticket(callback) {
  callback();
}

ticket(function () {
  console.log("Ticket Confirmed");
});

// ==========================
// TASK 10 - MOBILE STORE MANAGEMENT
// ==========================

let mobiles = [
  { brand: "Samsung", model: "M14", price: 18000, stock: 8 },
  { brand: "Apple", model: "iPhone 15", price: 75000, stock: 5 }
];

let stockValue = 0;

for (let mobile of mobiles) {
  console.log(mobile.model);
  stockValue += mobile.price * mobile.stock;

  if (mobile.price > 20000) {
    console.log(mobile.model + " above 20000");
  }

  switch (mobile.brand) {
    case "Samsung":
      console.log("Android Brand");
      break;
    case "Apple":
      console.log("Premium Brand");
      break;
    default:
      console.log("Other Brand");
  }
}

console.log("Total Stock Value:", stockValue);

function salesReport(callback) {
  callback();
}

salesReport(function () {
  console.log("Sales Report Generated");
});