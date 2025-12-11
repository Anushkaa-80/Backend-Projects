#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const program = new Command();

const EXPENSES_FILE = path.join(__dirname, "expenses.json");

function readExpenses() {
  try {
    if (!fs.existsSync(EXPENSES_FILE)) {
      return [];
    }
    //File exists, so read it "Go to the expenses.json file, open it, read all the text inside, and put that text into a variable called data"
    const data = fs.readFileSync(EXPENSES_FILE, "utf-8");

    // Convert JSON text to JavaScript array
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading expenses", error.message);
    return [];
  }
}

/**
 * WRITE EXPENSES TO FILE
 * This function saves the expenses array to expenses.json
 */
function writeExpenses(expenses) {
  try {
    //Convert JS array to json text
    const data = JSON.stringify(expenses, null, 2);

    //Write the JSON text to file
    fs.writeFileSync(EXPENSES_FILE, data, "utf-8");
    //"Go to expenses.json file, open it (create if doesn't exist), write this JSON text into it, save and close"
    // If file exists: Overwrites it completely (replaces old data)
    // If file doesn't exist: Creates it
  } catch (error) {
    console.log("Error writing the expenses:", error.message);
  }
}

function getNextId(expenses) {
  if (expenses.length === 0) return 1;

  // Find the highest ID and add 1
  const maxId = Math.max(...expenses.map((e) => e.id));
  return maxId + 1;
}

//SECTION4: COmmand Implementation

function addExpense(description, amount) {
  const parsedAmount = parseFloat(amount);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    console.error("Error Amount must be a positive number");
    return;
  }
  //Step 2: Validate description (make sure its not empty)
  if (!description || description.trim() == "") {
    console.error("Error: Description cannot be empty");
    return;
  }
  //step 3: Read existing expenses from file
  const expenses = readExpenses();

  const newExpense = {
    id: getNextId(expenses),
    // "Get today, convert to standard format, extract just the date part"
    date: new Date() // Creates todays date object
      .toISOString() // Converts to: "2024-12-10T14:30"45.123Z"
      .split("T")[0], //Splits at 'T': ["2024-12-10", "14:30:45.123Z"] // Takes first part: "2024-12-10"
    description: description.trim(),
    amount: parsedAmount,
  };

  expenses.push(newExpense);
  writeExpenses(expenses);

  console.log(`Expense added successfully (ID:${newExpense.id})`);
}
program
  .command("add")
  .description("Add a new expense")
  .requiredOption("--description <description> ", "Descprition of the expenses")
  .requiredOption("--amount <amount>", "Amount of the expense")
  .action((options) => {
    addExpense(options.description, options.amount);
  });
program
  .command("list")
  .description("List all expenses")
  .action(() => {
    listExpenses();
  });
program
  .command("delete")
  .description("Delete an expense")
  .requiredOption("--id <id>", "ID of the expense to delete")
  .action((options) => {
    deleteExpense(options.id);
  });

program
  .command("summary")
  .description("Show summary of expenses")
  .option("--month <month>", "Show summary for specific month(1-12)")
  .action((options) => {
    showSummary(options.month);
  });
program.parse(process.argv);

function listExpenses() {
  const expenses = readExpenses();
  if (expenses.length === 0) {
    console.log("No expenses found");
    return;
  }
  // Step 3: Print table header
  console.log("ID  Date       Description       Amount");
  console.log("--- ---------- ----------------- ------");

  expenses.forEach((expense) => {
    const id = String(expense.id).padEnd(3);
    const date = expense.date.padEnd(10);
    const description = expense.description.padEnd(17);
    const amount = `$${expense.amount}`;
    console.log(`${id} ${date} ${description} ${amount}`);
  });
}

function deleteExpense(id) {
  const expenses = readExpenses();
  // Step 2: Find the index of expense with this ID
  const index = expenses.findIndex((e) => e.id === parseInt(id));
  if (index === -1) {
    console.error(`Error : Expense with ID ${id} not found`);
    return;
  }
  expenses.splice(index, 1); //Means: "Remove 1 item at position index"
  writeExpenses(expenses);
  console.log("Expense deleted successfully");
}
function showSummary(month) {
  //1.Read all expenses from file
  const expenses = readExpenses();

  //Check if theere are any expenses
  if (expenses.length === 0) {
    console.log("No expenses found");
    return;
  }
  //Filter by month if provided

  let filteredExpenses = expenses;
  if (month) {
    //parse the month number
    const monthNum = parseInt(month);
    // get the current year
    const currentYear = new Date().getFullYear();
    filteredExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate.getMonth() + 1 === monthNum &&
        expenseDate.getFullYear() === currentYear
      );
    });

    //filter expenses for this month and year

    // check if anny expenses found for this month
    if (filteredExpenses.length === 0) {
      console.log(`No expenses found for month ${monthNum}`);
      return;
    }
  }
  //calcultae the total amount
  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  //Display the result
  if (month) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    console.log(
      `Total expenses for ${monthNames[parseInt(month) - 1]}: $${total} `
    );
  } else {
    console.log(`Total expenses: $${total}`);
  }
}
