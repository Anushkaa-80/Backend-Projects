const https = require('https');
const args = process.argv;
const username = args[2];

if(!username)
{
    console.log('Error: Please provide a Github username');
    console.log('Usage: node github-activity.js <username>')
    process.exit(1);
}

function displayActivity(events)
{
    console.log('Recent activity\n');

    events.forEach(function(event)
{
    const repoName = event.repo.name;
    const eventType= event.type;

    if(eventType === 'PushEvent' )
    {
        const commitCount = event.payload.commits.length;
        console.log(`- Pushed ${commitCount} commit(s) to ${repoName}`);

    }

    else if( eventType === 'IssuesEvent')
    {
        const action = event.payload.action;
        console.log(`-${action} an issue in ${repoName}`);
    }
    else if(eventType === 'WatchEvent')
    {
        console.log(`- Starred ${repoName}`);

    }
    else if(eventType === 'CreateEvent')
    {
        const refType= event.payload.ref_type;
        console.log(`-Created ${refType} in ${repoName}`);
    }
    else if(eventType === 'PullRequestEvent')
    {
        const action = event.payload.action;
        console.log(`- ${action} a pull request in ${repoName}`);

    }
    else{
        console.log(`- ${eventType} in ${repoName}`);
    }
});
console.log('');
}


function fetchGithubActivity(username)
{
    const url=`https://api.github.com/users/${username}/events`;

    https.get(url, {headers:{'User-Agent': 'node.js'}}, function(response){
        let data ='';

        response.on('data', function(chunk)
        {
   data+=chunk;
        });

        response.on('end',function()
    {
          try {
            const events = JSON.parse(data);
            if(events.length === 0)
            {
                console.log('No recent activity found for this user');
                return;
            }
            displayActivity(events);
          } catch (error) {
            console.log('Error parsing data', error.message)
          }
    });


    }).on('error', function(error)
{
    console.log('Error fetching data:', error.message)
})
}





console.log(`Fetching activity for ${username}... `)
fetchGithubActivity(username);

