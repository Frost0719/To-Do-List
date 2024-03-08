function addTask() {
    var taskTitle = document.getElementById("taskTitle");
    var taskDescription = document.getElementById("taskDescription");
    var taskList = document.getElementById("taskList");

    if (taskTitle.value !== "" && taskDescription.value !== "") {
        var newTask = document.createElement("li");

        // Create a div to hold the body and title
        var taskContent = document.createElement("div");
        taskContent.className = "task-content";

        // Create a paragraph for the title
        var taskTitleParagraph = document.createElement("p");
        taskTitleParagraph.textContent = "Task Title: " + taskTitle.value;

        // Create a paragraph for the description
        var taskDescriptionParagraph = document.createElement("p");
        taskDescriptionParagraph.textContent = "Task Description: " + taskDescription.value;

        // Append title and description to the task content div
        taskContent.appendChild(taskTitleParagraph);
        taskContent.appendChild(taskDescriptionParagraph);

        // Set up the onclick event for removing the task
        newTask.onclick = function() {
            taskList.removeChild(newTask);
        };

        // Append the task content to the new task
        newTask.appendChild(taskContent);

        // Append the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input fields
        taskTitle.value = "";
        taskDescription.value = "";
    }
}
