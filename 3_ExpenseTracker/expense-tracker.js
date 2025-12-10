#!/usr/bin/env node


const fs = require('fs');
const path = require('path')
const {Command} = require('commander');
const program = new Command();

const EXPENSES_FILE = path.join(__dirname, 'expenses.json');

function readExpenses()
{
    try{
        if(!fs.existsSync(EXPENSES_FILE)){
            return[];
        }
//File exists, so read it "Go to the expenses.json file, open it, read all the text inside, and put that text into a variable called data"
const data = fs.readFileSync(EXPENSES_FILE, 'utf-8');

    // Convert JSON text to JavaScript array
    return JSON.parse(data);

    }catch(error)
    {
      console.error('Error reading expenses',error.message);
      return [];
    }
}



/**
 * WRITE EXPENSES TO FILE
 * This function saves the expenses array to expenses.json
 */
function writeExpenses(expenses)
{
     try {
        //Convert JS array to json text
        const data = JSON.stringify(expenses,null,2);

        //Write the JSON text to file
        fs.writeFileSync(EXPENSES_FILE,data, 'utf-8');
//"Go to expenses.json file, open it (create if doesn't exist), write this JSON text into it, save and close"
// If file exists: Overwrites it completely (replaces old data)
// If file doesn't exist: Creates it

     } catch (error) {
        console.log('Error writing the expenses:', error.message);
     }
}

function getNextId(expenses)
{
    if (expenses.length === 0 ) return 1;
     
    // Find the highest ID and add 1
    const maxId= Math.max(...expenses.map(e=> e.id));
    return maxId +1;
}


//SECTION4: COmmand Implementation 

function addExpense(description, amount)
{
    const parsedAmount = parseFloat(amount);

    if(isNaN(parsedAmount) || parsedAmount<=0)
    {
        console.error('Error Amount must be a positive number');
        return ;
    }
    //Step 2: Validate description (make sure its not empty)
    if(!description || description.trim()=='')
    {
        console.error('Error: Description cannot be empty');
        return;
    }
     //step 3: Read existing expenses from file
     const expenses = readExpenses();

     const newExpense ={
        id: getNextId(expenses),
       // "Get today, convert to standard format, extract just the date part"
        date: new Date(). // Creates todays date object
        toISOString().  // Converts to: "2024-12-10T14:30"45.123Z"
        split('T') //Splits at 'T': ["2024-12-10", "14:30:45.123Z"]
        [0] ,// Takes first part: "2024-12-10"
        description: description.trim(),
        amount: parsedAmount
     };

     expenses.push(newExpense);
     writeExpenses(expenses);


     console.log(`Expense added successfully (ID:${newExpense.id})`);
    

}
 program
     .command('add')
     .description('Add a new expense')
     .requiredOption('--description <description> ', 'Descprition of the expenses')
     .requiredOption('--amount <amount>', 'Amount of the expense')
     .action((options) => {
        addExpense(options.description, options.amount);
     });
program.parse(process.argv);