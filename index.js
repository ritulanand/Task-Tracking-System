class TaskManager{
    constructor(){
        this.tasks = [];
        this.idCounter = 1;
    }

    addTask(title, description, category, duedate){
        const task = {
            id: this.idCounter++,
            title,
            description,
            category,
            duedate : duedate || 'No Due Date',
            isComplete : false
        }
        this.tasks.push(task);
        console.log(`task added`, task);
    }

    updateTask(id, updateFields){
        const task = this.tasks.findIndex((task) => task.id === id);
        if(task){
            Object.assign(task, updateFields);
            console.log(`task updated`, task);
        }else{
            console.log(`task with id${id} not found`);
        }
    }

    deleteTask(id){
        const index = this.tasks.findIndex((task) => task.id === id);
        if(index !== -1){
            const removeTask = this.tasks.splice(index, 1);
            console.log(`task deleted`, removeTask[0]);
        }else{
            console.log(`task with id ${id} not found`);
        }
    }
    toggleTaskCompletion(id){
        const task = this.tasks.findIndex((task) => task.id === id);
        if(task){
            task.isComplete = !task.isComplete;
            console.log(`task completion toggle : `, task);
        }else{
            console.log(`task with id: ${id} not found`)
        }

    }

    viewTasks(){
        console.log(`all task `);
        this.tasks.forEach((task) => console.log(task));
    }

    //filter by task
    // filterTask(id);

    //   {

    //     let fileredTask;

    //     if (fileredTask) {

    //       fileredTask = this.tasks.filter((id) => fileredTask.id == id);

    //       return fileredTask;

    //     }

    //   }

    //filter by category

}



const taskManager = new TaskManager();
console.log(`task`, taskManager);

taskManager.addTask("complete javascript project", "work on tasj tracker system, is done is amost done we are left to review the code part with team", "work", "2024-11-20");


taskManager.addTask("buy car", "TATA cars are good", "Shopping", "2025-1-1" );

taskManager.viewTasks();

// taskManager.toggleTaskCompletion("1");

// taskManager.updateTask(1, {title : 'Shoppping could be anything'});

// taskManager.viewTasks();
taskManager.deleteTask(1);
taskManager.viewTasks();
