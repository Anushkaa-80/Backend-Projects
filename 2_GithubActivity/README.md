# GitHub Activity CLI

A command-line tool to fetch and display recent activity of any GitHub user using the GitHub API.

**Project URL:** https://roadmap.sh/projects/github-user-activity

## Features

- Fetch recent GitHub activity for any public user
- Display pushes, stars, forks, issues, pull requests, and more
- Clean, formatted output
- Comprehensive error handling
- No external dependencies

## Installation
```bash
git clone https://github.com/YOUR_USERNAME/github-activity-cli.git
cd github-activity-cli
```

**Requirements:** Node.js v14 or higher

## Usage
```bash
node github-activity.js <username>
```

**Example:**
```bash
node github-activity.js kamranahmedse
```

**Output:**
```
📊 Recent Activity:

- Pushed 3 commit(s) to kamranahmedse/developer-roadmap
- Starred facebook/react
- opened an issue in nodejs/node
- Forked microsoft/vscode
```

## Supported Events

- **PushEvent** - Commits pushed to repository
- **IssuesEvent** - Issues opened/closed
- **WatchEvent** - Repository starred
- **ForkEvent** - Repository forked
- **CreateEvent** - Branch/tag created
- **PullRequestEvent** - Pull request opened/closed
- **DeleteEvent** - Branch/tag deleted

## Error Handling

- Invalid username → "User not found"
- No username provided → Usage instructions
- API rate limit → "Try again later"
- Network errors → Connection error message

## Technical Details

**API Endpoint:**
```
https://api.github.com/users/<username>/events
```

**Built with:**
- Node.js HTTPS module (built-in)
- GitHub REST API

**Key Features:**
- Defensive programming for undefined properties
- HTTP status code handling (404, 403, etc.)
- JSON parsing with error handling
- Asynchronous data streaming

## Learning Outcomes

- Making HTTP requests to external APIs
- Handling asynchronous operations and callbacks
- Processing JSON data from APIs
- Error handling and data validation
- Building CLI applications with Node.js

## Author

**Your Name**
- GitHub: [@Anushkaa-80](https://github.com/Anushkaa-80)

## Acknowledgments

- Project idea from [roadmap.sh](https://roadmap.sh/projects/github-user-activity)
- Built as part of backend development learning path

---

⭐ Star this repo if you found it helpful!