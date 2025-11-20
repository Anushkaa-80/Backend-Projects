const fs = require("fs");

const FILE_PATH = "./task.json";

function readTasks() {
  if (!fs.existsSync(FILE_PATH)) {
    return [];
  }
  const data = fs.readFileSync(FILE_PATH, "utf8");

  if (data.trim() === "") {
    return [];
  }
  return JSON.parse(data);
}

function writeTasks(tasks) {
  const data = JSON.stringify(tasks, null, 2);

  fs.writeFileSync(FILE_PATH, data, "utf8");
}

const args = process.argv;

const command = args[2];

const taskArgs = args.slice(3);

if (command === "add") {
  const description = taskArgs[0];
  const tasks = readTasks();

  const newTask = {
    id: tasks.length + 1,
    description: description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);

  writeTasks(tasks);

  console.log(`Task added successfully (ID: ${newTask.id})`);
} else if (command === "list") {
  const tasks = readTasks();
  // check if there are no tasks
  if (tasks.length === 0) {
    console.log("no tasks found!");
    return;
  }

   const statusFilter = taskArgs[0];

   let filteredTasks = tasks;
   
   if(statusFilter)

   {
    filteredTasks = tasks.filter(function(task)
{
    return task.status === statusFilter;
});

if(filteredTasks.length === 0)
{
    console.log(`No tasks with status "${statusFilter}"found!`);
    return;
}
   }
   if(statusFilter)
    {
        console.log(`\nTasks (${statusFilter}):\n`);
    }
    else
    {
        console.log('\n All Tasks:\n');
    }


  

  filteredTasks.forEach(function (task) {
    console.log(`[${task.id}] ${task.description}`);
    console.log(` Status: ${task.status}`);
    console.log(` Created: ${task.createdAt}`);
    console.log(`Updated: ${task.updatedAt}`);
    console.log("");
  });
} else if (command === "update") {
  const taskId = parseInt(taskArgs[0]);
  const newDescription = taskArgs[1];

  if (!taskId || !newDescription) {
    console.log("Error: Please provide task ID and new description");
    console.log('USage: task-cli update <id> "new description"');
    return;
  }
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(function (task) {
    return task.id === taskId;
  });
  if (taskIndex === -1) {
    console.log(`Error: Task with ID ${taskId} not found!`);
    return;
  }
  tasks[taskIndex].description = newDescription;
  tasks[taskIndex].updatedAt = new Date().toISOString();

  writeTasks(tasks);
  console.log(`Task ${taskId} updated Successfully!`);
} else if (command === "delete") {
  const taskId = parseInt(taskArgs[0]);
  if (!taskId) {
    console.log("Error: Please provide task ID");
    console.log("Usage: task-cli delete <id>");
    return;
  }
  const tasks = readTasks();

  const taskIndex = tasks.findIndex(function (task) {
    return task.id === taskId;
  });

  if(taskIndex===-1)
  {
    console.log(`Error: Task withID ${taskId} not found`);
    return ;
  }
  tasks.splice(taskIndex,1);
  writeTasks(tasks);

  console.log(`Task ${taskId} deleted successfully!`)
}

else if(command==='mark-in-progress')
{
    const taskId = parseInt(taskArgs[0]);
    if(!taskId)
    {
        console.log('Error: Please provide task ID');
        console.log('Usage: task-cli mark-in-progress <id>');
        return;
    }
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(function(task){
        return task.id === taskId;
    });

    if(taskIndex===-1)
    {
        console.log(`Error: Task with ID${taskId} not found!`);
        return;
    }
    tasks[taskIndex].status= 'in-progress';
    tasks[taskIndex].updatedAt= new Date().toISOString();

    writeTasks(tasks);
    console.log(`Task ${taskId} marked as in-progress!`);

}

else if(command === 'mark-done')
{
    const taskId = parseInt(taskArgs[0]);
    
    // Check if ID is provided
    if(!taskId)
    {
        console.log('Error: Please provide task ID');
        console.log('Usage: task-cli mark-done <id>');
        return;
    }
    
    // Read all tasks
    const tasks = readTasks();
    
    // Find the task with matching ID
    const taskIndex = tasks.findIndex(function(task) {
        return task.id === taskId;
    });
    
    // Check if task was found
    if(taskIndex === -1)
    {
        console.log(`Error: Task with ID ${taskId} not found!`);
        return;
    }
    
    // Update the status
    tasks[taskIndex].status = 'done';
    tasks[taskIndex].updatedAt = new Date().toISOString();
    
    // Save to file
    writeTasks(tasks);
    
    console.log(`Task ${taskId} marked as done!`);
}

else {
  console.log("Unknown command!");
}
