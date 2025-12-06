#!/usr/bin/env node


const fs = require('fs');
const path = require('path')
const {command} = require('commander');
const program = new Command();

const EXPENSES_FILE = path.join(__dirname, 'expenses.json');

function readExpenses()
{
    try{
        if(!fs.existsSync(EXPENSES_FILE)){
            return[];
        }
//File exists, so read it
const data = fs.readFileSync(EXPENSES_FILE, 'utf-8');


    }catch(error)
    {

    }
}