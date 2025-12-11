# 💰 Expense Tracker CLI
 **Project URL:** https://roadmap.sh/projects/expense-tracker
A simple and efficient command-line expense tracker application built with Node.js. Track your daily expenses, view summaries, and manage your finances right from your terminal!

## 📋 Features

- ✅ **Add Expenses** - Record expenses with description and amount
- ✅ **List Expenses** - View all expenses in a clean table format
- ✅ **Delete Expenses** - Remove expenses by ID
- ✅ **View Summary** - See total expenses or filter by specific month
- ✅ **Data Persistence** - All data stored in JSON format
- ✅ **Input Validation** - Prevents invalid entries
- ✅ **Error Handling** - Graceful error messages

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup

1. **Clone the repository**
```bash
   git clone https://github.com/Anushkaa-80/Backend-Projects.git
   cd expense-tracker
```

2. **Install dependencies**
```bash
   npm install
```

3. **Link the command globally** (Optional)
```bash
   npm link
```
   
   This allows you to use `expense-tracker` command from anywhere. Otherwise, use `node expense-tracker.js` in the project directory.

## 📖 Usage

### Add an Expense
```bash
expense-tracker add --description "Lunch" --amount 20
```

**Example Output:**
```
Expense added successfully (ID: 1)
```

### List All Expenses
```bash
expense-tracker list
```

**Example Output:**
```
ID  Date       Description       Amount
--- ---------- ----------------- ------
1   2024-12-10 Lunch             $20
2   2024-12-10 Coffee            $5
3   2024-12-10 Dinner            $15
```

### Delete an Expense
```bash
expense-tracker delete --id 2
```

**Example Output:**
```
Expense deleted successfully
```

### View Summary

**Total of all expenses:**
```bash
expense-tracker summary
```

**Example Output:**
```
Total expenses: $35
```

**Summary for specific month:**
```bash
expense-tracker summary --month 8
```

**Example Output:**
```
Total expenses for August: $35
```

## 🛠️ Commands Reference

| Command | Description | Options |
|---------|-------------|---------|
| `add` | Add a new expense | `--description <text>` (required)<br>`--amount <number>` (required) |
| `list` | Display all expenses | None |
| `delete` | Remove an expense | `--id <number>` (required) |
| `summary` | Show expense totals | `--month <1-12>` (optional) |



## 🔧 Technical Details

### Built With

- **Node.js** - JavaScript runtime
- **Commander.js** - Command-line interface framework
- **File System (fs)** - Data persistence
- **JSON** - Data format

### Data Structure

Expenses are stored in `expenses.json` with the following structure:
```json
[
  {
    "id": 1,
    "date": "2024-12-10",
    "description": "Lunch",
    "amount": 20
  }
]
```

### Key Features Implementation

- **ID Generation**: Automatically assigns unique IDs to expenses
- **Date Handling**: Automatically records current date for each expense
- **Input Validation**: 
  - Amounts must be positive numbers
  - Descriptions cannot be empty
  - IDs must exist for deletion
- **Error Handling**: Try-catch blocks for file operations

## 🎯 Learning Outcomes

This project demonstrates:

- File system operations (read/write)
- JSON parsing and stringification
- Command-line argument parsing
- Data validation and error handling
- Array manipulation methods (map, filter, reduce, findIndex)
- Date manipulation
- Modular code organization

## 🐛 Error Handling

The application handles various error scenarios:

- **Invalid amount**: Non-numeric or negative values
- **Empty description**: Blank or whitespace-only descriptions
- **Non-existent ID**: Attempting to delete an expense that doesn't exist
- **File errors**: Issues reading or writing the data file
- **Empty data**: Graceful handling when no expenses exist

## 📝 Examples

### Complete Workflow
```bash
# Add some expenses
expense-tracker add --description "Breakfast" --amount 8.50
expense-tracker add --description "Bus ticket" --amount 2.50
expense-tracker add --description "Lunch" --amount 12

# View all expenses
expense-tracker list

# Get total
expense-tracker summary

# Delete an expense
expense-tracker delete --id 2

# View updated list
expense-tracker list
```

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@Anushkaa-80](https://github.com/Anushkaa-80)

## 🙏 Acknowledgments

- Project inspired by [roadmap.sh](https://roadmap.sh/projects/expense-tracker)
- Built as a learning exercise for backend development
- Thanks to the Node.js and Commander.js communities

## 🔮 Future Enhancements

Potential features to add:

- [ ] Expense categories
- [ ] Monthly budget limits with warnings
- [ ] Export to CSV
- [ ] Update existing expenses
- [ ] Data visualization
- [ ] Multiple users support
- [ ] Search and filter capabilities

---

**Made with ❤️ and lots of ☕ while learning backend development**