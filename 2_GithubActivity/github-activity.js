// Import the https module
const https = require('https');

// Get the username from command line
const args = process.argv;
const username = args[2];

// Check if username is provided
if (!username) {
    console.log('Error: Please provide a GitHub username');
    console.log('Usage: node github-activity.js <username>');
    process.exit(1);
}

// Function to display GitHub activity
function displayActivity(events) {
    console.log('\n📊 Recent Activity:\n');
    
    // Loop through each event
    events.forEach(function(event) {
        const repoName = event.repo.name;
        const eventType = event.type;
        
        // Handle different event types
        if (eventType === 'PushEvent') {
            // Check if commits exist before accessing length
            const commitCount = event.payload.commits ? event.payload.commits.length : 0;
            console.log(`- Pushed ${commitCount} commit(s) to ${repoName}`);
        }
        else if (eventType === 'IssuesEvent') {
            const action = event.payload.action || 'updated';
            console.log(`- ${action} an issue in ${repoName}`);
        }
        else if (eventType === 'WatchEvent') {
            console.log(`- Starred ${repoName}`);
        }
        else if (eventType === 'ForkEvent') {
            console.log(`- Forked ${repoName}`);
        }
        else if (eventType === 'CreateEvent') {
            const refType = event.payload.ref_type || 'something';
            console.log(`- Created ${refType} in ${repoName}`);
        }
        else if (eventType === 'PullRequestEvent') {
            const action = event.payload.action || 'updated';
            console.log(`- ${action} a pull request in ${repoName}`);
        }
        else if (eventType === 'DeleteEvent') {
            const refType = event.payload.ref_type || 'branch';
            console.log(`- Deleted ${refType} in ${repoName}`);
        }
        else {
            console.log(`- ${eventType.replace('Event', '')} in ${repoName}`);
        }
    });
    
    console.log('');
}

// Function to fetch GitHub activity
function fetchGitHubActivity(username) {
    // GitHub API URL
    const url = `https://api.github.com/users/${username}/events`;
    
    // Make the HTTP request
    https.get(url, { headers: { 'User-Agent': 'node.js' } }, function(response) {
        // Check HTTP status code
        if (response.statusCode !== 200) {
            console.log(`\nError: GitHub API returned status code ${response.statusCode}`);
            if (response.statusCode === 404) {
                console.log('User not found.');
            } else if (response.statusCode === 403) {
                console.log('API rate limit exceeded. Try again later.');
            }
            return;
        }
        
        let data = '';
        
        // Collect data chunks
        response.on('data', function(chunk) {
            data += chunk;
        });
        
        // When all data is received
        response.on('end', function() {
            try {
                // Parse JSON string to JavaScript object
                const parsedData = JSON.parse(data);
                
                // Check if the response has an error message
                if (parsedData.message) {
                    console.log(`\nError: ${parsedData.message}`);
                    if (parsedData.message === 'Not Found') {
                        console.log('The username does not exist or has no public activity.');
                    }
                    return;
                }
                
                // Check if parsedData is an array (valid events)
                if (!Array.isArray(parsedData)) {
                    console.log('Error: Unexpected response format from GitHub API');
                    return;
                }
                
                // Check if we got any events
                if (parsedData.length === 0) {
                    console.log('\nNo recent activity found for this user.');
                    return;
                }
                
                // Display the events
                displayActivity(parsedData);
                
            } catch (error) {
                console.log('Error parsing data:', error.message);
            }
        });
    }).on('error', function(error) {
        console.log('\nError fetching data:', error.message);
        console.log('Please check your internet connection.');
    });
}

// Call the function
console.log(`Fetching activity for ${username}...`);
fetchGitHubActivity(username);