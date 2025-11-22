# Task Tracker CLI

A simple and efficient command-line interface (CLI) application to track and manage your tasks. Built with Node.js, this project helps you organize your daily tasks, mark their progress, and maintain productivity.

**Project URL:** https://roadmap.sh/projects/task-tracker
## 📋 Features

- ✅ **Add tasks** - Create new tasks with unique IDs
- ✅ **Update tasks** - Modify task descriptions
- ✅ **Delete tasks** - Remove tasks you no longer need
- ✅ **Mark task status** - Track progress (todo, in-progress, done)
- ✅ **List tasks** - View all tasks or filter by status
- ✅ **Persistent storage** - All tasks are saved in a JSON file
- ✅ **Error handling** - Graceful handling of edge cases

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Anushkaa-80/Backend-Projects.git
cd task-tracker-cli
```

2. Ensure you have Node.js installed:
```bash
node --version
```

## 💻 Usage

### Adding a New Task
```bash
node task-cli.js add "Buy groceries"
# Output: Task added successfully (ID: 1)
```

### Listing All Tasks
```bash
node task-cli.js list
```

**Output:**
```
📋 All Tasks:

[1] Buy groceries
    Status: todo
    Created: 2025-11-18T10:30:00.000Z
    Updated: 2025-11-18T10:30:00.000Z
```

### Listing Tasks by Status
```bash
# List all tasks marked as done
node task-cli.js list done

# List all tasks marked as todo
node task-cli.js list todo

# List all tasks marked as in-progress
node task-cli.js list in-progress
```

### Updating a Task
```bash
node task-cli.js update 1 "Buy groceries and cook dinner"
# Output: Task 1 updated successfully!
```

### Deleting a Task
```bash
node task-cli.js delete 1
# Output: Task 1 deleted successfully!
```

### Marking Task Status
```bash
# Mark a task as in progress
node task-cli.js mark-in-progress 1
# Output: Task 1 marked as in-progress!

# Mark a task as done
node task-cli.js mark-done 1
# Output: Task 1 marked as done!
```




## 🔧 Task Properties

Each task contains the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `id` | Number | Unique identifier for the task |
| `description` | String | Short description of the task |
| `status` | String | Current status: `todo`, `in-progress`, or `done` |
| `createdAt` | String | ISO timestamp when the task was created |
| `updatedAt` | String | ISO timestamp when the task was last updated |

## 📖 Example Workflow

Here's a typical workflow using the Task Tracker:
```bash
# Day 1: Add your tasks
node task-cli.js add "Write project proposal"
node task-cli.js add "Research competitors"
node task-cli.js add "Create presentation"

# Day 2: Start working
node task-cli.js mark-in-progress 1
node task-cli.js list in-progress

# Day 3: Complete tasks
node task-cli.js mark-done 1
node task-cli.js mark-in-progress 2

# Check what's completed
node task-cli.js list done

# Update a task description
node task-cli.js update 3 "Create final presentation slides"

# View all tasks
node task-cli.js list
```

## ⚠️ Error Handling

The application handles various error cases:

- Missing task ID or description
- Task not found
- Invalid commands
- Empty task list
- No tasks matching filter criteria

**Example:**
```bash
node task-cli.js update 100 "This won't work"
# Output: Error: Task with ID 999 not found!
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **File System (fs)** - Native Node.js module for file operations
- **JSON** - Data storage format

## 📝 Commands Reference

| Command | Syntax | Description |
|---------|--------|-------------|
| add | `node task-cli.js add "description"` | Add a new task |
| list | `node task-cli.js list [status]` | List all tasks or filter by status |
| update | `node task-cli.js update <id> "new description"` | Update task description |
| delete | `node task-cli.js delete <id>` | Delete a task |
| mark-in-progress | `node task-cli.js mark-in-progress <id>` | Mark task as in progress |
| mark-done | `node task-cli.js mark-done <id>` | Mark task as done |

## 🎯 Learning Outcomes

This project helped me learn:

- Working with Node.js file system operations
- Handling command-line arguments with `process.argv`
- JSON parsing and stringification
- Array methods (`forEach`, `findIndex`, `filter`, `splice`, `push`)
- Error handling and input validation
- Building CLI applications
- Writing clean, maintainable code

<!-- ## 🚀 Future Enhancements

Potential features to add:

- [ ] Add task priorities (high, medium, low)
- [ ] Add due dates for tasks
- [ ] Add task categories/tags
- [ ] Search tasks by keywords
- [ ] Export tasks to CSV
- [ ] Add colors to CLI output
- [ ] Make it a global npm package -->

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Anushka Chaurasia**

- GitHub: [@Anushkaa-80
](https://github.com/Anushkaa-80)
<!-- - LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE) -->

## 🙏 Acknowledgments

- This project was built as part of the [roadmap.sh](https://roadmap.sh) backend developer learning path
- Project idea from: https://roadmap.sh/projects/task-tracker

---

⭐ If you found this project helpful, please give it a star on GitHub!

**Happy Task Tracking! 📝✨**