#!/usr/bin/env node


const fs = require('fs');
const path = require('path');
const { Command } = require('commander');

// SECTION 2: Setup and Configuration
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
console.log('Testing readExpenses function ..');
const expenses = readExpenses();
console.log('expen found:', expenses);



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
