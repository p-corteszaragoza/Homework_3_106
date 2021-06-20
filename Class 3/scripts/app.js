var important;
var taskArray = [];
var index;
var serverUrl = "https://fsdiapi.azurewebsites.net/";

function toogleImportant() {
    console.log("Click on important icon");
    if(!important) {
        important = true;
        $("#iconImportant").removeClass("far").addClass("fas");
    } else { 
        important = false;
        $("#iconImportant").removeClass("fas").addClass("far");
    }
}

function saveTask() {
    console.log("Task has been saved");
    // Read values from controls
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let category = $("#selCategory").val();
    let location = $("#txtLocation").val();
    let date = $("#txtDueDate").val();
    let color = $("#txtColor").val();

    // Create an object
    let task = new Task(title, important, description, category, location, date, color);
    console.log("task " , task);
    
    // Send object to a backend server
    taskArray.push(task);
    console.log("Registro " , taskArray);
    console.log("task " , JSON.stringify(task));
    
  
    $.ajax({
        url: serverUrl + "api/tasks/",
        type: "POST",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function(res) {
            console.log("Server says: ", res);
        },
        error: function(eDetails) {
            console.log("Error: ", eDetails);
        }
    });

    //  Display the task
    displayTask(task);

}

function displayTask(task){
    let syntaxPart1 = `<div class="important task important-container"> `
    let syntaxPart2 =  ` <div class="description">`;
    if(task.important) {
        syntaxPart2 += `<i class="fas fa-star"></i></h4>`;
    } else {
        syntaxPart2 += `<i class="far fa-star"></i></h4>`;
    }

    let syntaxPart3 = `       
                <h5>${task.title}</h5>
                <p>${task.description}</p>
            </div>
            <label class="due-date">${task.date}</label>
            <label class="location">${task.location}</label>
        </div>`;

    $("#pendingList").append(syntaxPart1 + syntaxPart2 + syntaxPart3);
}

function init() {
    console.log("My task Manager");
    // Load data
    index = 0;
    important = false;
    // Hook events
    $("#iconImportant").click(toogleImportant);
    $("#btnSave").click(saveTask);
}

window.onload = init;