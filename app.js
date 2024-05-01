$(document).ready(function() {

    // Sample data (replace with logic to store and retrieve data)
    var schedule = [];
    var todoList = [];
  
    // Function to add schedule event (replace with modal or form)
    function addScheduleEvent(title, startTime, endTime, weeklyRecurrence) {
      schedule.push({
        title: title,
        start: startTime,
        end: endTime,
        weeklyRecurrence: weeklyRecurrence
      });
      updateScheduleList();
    }
  
    // Function to update schedule list UI
    function updateScheduleList() {
      $("#schedule-list").empty();
      schedule.forEach(function(event) {
        $("#schedule-list").append("<li>" + event.title + " (" + event.start + " - " + event.end + ")" + " Every: " + event.weeklyRecurrence + "</li>");
      });
    }
  
    // Function to add To-Do item (replace with modal or form)
    function addTodoItem(text) {
      todoList.push(text);
      updateTodoList();
    }
  
    // Function to update To-Do list UI
    function updateTodoList() {
      $("#todo-list").empty();
      todoList.forEach(function(item) {
        $("#todo-list").append("<li>" + item + "</li>");
      });
    }
  
    // Add event listeners for buttons (replace with your implementation)
    $("#add-event-btn").click(function() {
      //DONE: Show a modal or form to get event details (title, start time, end time)
      $("#eventForm").removeClass("hidden");
    });
    $("#eventForm").submit(function(event) {
      // DONE: Call addScheduleEvent with the collected data
      event.preventDefault();//Prevents default form submission
    
      var title = $("#eventTitle").val();
      var startTime = $("#eventStart").val();
      var endTime = $("#eventEnd").val();
      var weeklyReccurrence = $("#weeklyReccurrence").val();
    
      addScheduleEvent(title, startTime, endTime, weeklyReccurrence);
      $("#eventForm")[0].reset(); // Reset the form fields
      $("#eventForm").addClass("hidden"); // Hide the form
    });
  
    $("#add-todo-btn").click(function() {
        var task = $("#todo-input").val().trim();
        if (task !== "") {
          addTodoItem(task);
          $("#todo-input").val("");
        }
    });
  
  });

  $(document).ready(function() {
    // Sample data (replace with logic to store and retrieve data)
    var schedule = [];

    // Function to add an event to the schedule
    function addScheduleEvent() {
        var title = $("#event-title").val();
        var date = $("#event-date").val();
        var time = $("#event-time").val();
        var weeklyRecurrence = $("#weeklyreccurrence").val();
        
        if (title !== "" && date !== "" && time !== "") {
            var repeatDays = ["None", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            var repeat = repeatDays[parseInt(weeklyRecurrence)];

            var eventDetails = "Title: " + title + " Date: " + date + " Time: " + time + " Repeat: " + repeat;
            var scheduleList = $("#schedule-list");
            scheduleList.append("<li>" + eventDetails + "</li>");

            // Push event details to schedule array if needed for further processing
            schedule.push({
                title: title,
                date: date,
                time: time,
                repeat: repeat
            });

            // Clear input fields after adding event
            $("#event-title").val("");
            $("#event-date").val("");
            $("#event-time").val("");
            $("#weeklyreccurrence").val("0");
        }
    }

    // Add event listener to the add schedule button
    $("#add-schedule-btn").click(addScheduleEvent);

    // Function to add a to-do item to the list
    function addTodoItem() {
        var todoText = $("#todo-input").val().trim();
        if (todoText !== "") {
            var todoList = $("#todo-list");
            todoList.append("<li>" + todoText + "</li>");
            $("#todo-input").val(""); // Clear the input field
        }
    }

    // Add event listener to the to-do button
    $("#add-todo-btn").click(addTodoItem);
});