# CLI Backend Projects Collection

A collection of command-line interface (CLI) applications built with Node.js as part of my backend development journey. Each project demonstrates different aspects of backend programming, from file operations to API integration.

## 📁 Project Structure
```
CLI/
├── task-tracker/           # Task management CLI
├── github-activity/        # GitHub user activity viewer
└── README.md              # This file
```

## 🚀 Projects

### 1. Task Tracker CLI
**Status:** ✅ Completed

A full-featured task management system with CRUD operations and status tracking.

**Features:**
- Add, update, and delete tasks
- Mark tasks as todo, in-progress, or done
- Filter tasks by status
- Persistent JSON storage

**Tech Stack:** Node.js, File System (fs), JSON

**Project Link:** [Task Tracker](./task-tracker)

**Key Learnings:**
- File system operations
- JSON data manipulation
- Command-line argument parsing
- CRUD operations

---

### 2. GitHub Activity CLI
**Status:** ✅ Completed

Fetch and display recent activity of any GitHub user directly in the terminal.

**Features:**
- Fetch user activity from GitHub API
- Display multiple event types (pushes, stars, forks, etc.)
- Comprehensive error handling
- Clean, formatted output

**Tech Stack:** Node.js, HTTPS module, GitHub REST API

**Project Link:** [GitHub Activity](./github-activity)

**Key Learnings:**
- HTTP requests and API integration
- Asynchronous programming
- JSON parsing from external sources
- Defensive programming

---

## 🛠️ Technologies Used

- **Runtime:** Node.js
- **Language:** JavaScript
- **APIs:** GitHub REST API
- **Storage:** JSON files
- **Modules:** Built-in Node.js modules (fs, https, process)

## 📚 Skills Developed

| Skill | Task Tracker | GitHub Activity |
|-------|:------------:|:---------------:|
| File Operations | ✅ | - |
| API Integration | - | ✅ |
| JSON Handling | ✅ | ✅ |
| Command Line Args | ✅ | ✅ |
| Error Handling | ✅ | ✅ |
| Async Programming | - | ✅ |
| Data Validation | ✅ | ✅ |

## 🎯 Upcoming Projects

- [ ] Expense Tracker CLI
- [ ] URL Shortener CLI
- [ ] Weather CLI App
- [ ] Markdown Note Manager
- [ ] GitHub Repository Analyzer

## 🏃 Quick Start

Each project has its own setup instructions. Navigate to the project folder and check its README:
```bash
# Task Tracker
cd task-tracker
node task-cli.js add "Buy groceries"

# GitHub Activity
cd github-activity
node github-activity.js kamranahmedse
```

## 📖 Learning Path

This collection follows the [roadmap.sh](https://roadmap.sh) backend development path:

1. ✅ **Beginner:** Task Tracker (File operations, CRUD)
2. ✅ **Intermediate:** GitHub Activity (API integration)
3. 🔄 **Advanced:** More complex CLI tools (Coming soon)

## 💡 Why CLI Projects?

CLI applications are perfect for learning backend development because they:
- Focus on core programming logic without frontend complexity
- Teach essential concepts like file I/O, APIs, and data handling
- Are practical and can be used in real workflows
- Build a strong foundation for web development

## 🤝 Contributing

Feel free to:
- Fork this repository
- Add your own improvements
- Suggest new project ideas
- Report issues

## 📞 Connect With Me

- **GitHub:** [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- **LinkedIn:** [Your Profile](https://linkedin.com/in/YOUR_PROFILE)

## 🙏 Acknowledgments

- Project ideas from [roadmap.sh](https://roadmap.sh)
- Learning resources from Node.js documentation
- Inspiration from the developer community

---

**🌟 Star this repo if you're learning backend development too!**

**Made with 💻 while mastering backend fundamentals**
