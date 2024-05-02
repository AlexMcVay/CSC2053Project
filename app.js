$(document).ready(function() {

  // Sample data (replace with logic to store and retrieve data)
  var schedule = [];
  var todoList = [];

  // Calendar initialization
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();

  // Function to add an event to FullCalendar
  function addEventToCalendar(event) {
    calendar.addEvent(event);
  }

  // Function to add an event to the schedule and FullCalendar
  function addScheduleEvent(title, startTime, endTime, weeklyRecurrence) {
    var event = {
      title: title,
      start: startTime,
      allDay: false,
      daysOfWeek: weeklyRecurrence === "0" ? null : [parseInt(weeklyRecurrence)]
    };

    // Call the function to add the event to FullCalendar
    addEventToCalendar(event);

    // Update the schedule array
    schedule.push(event);
  }

  // Function to update schedule list UI
  function updateScheduleList() {
    $("#schedule-list").empty();
    schedule.forEach(function(event) {
      $("#schedule-list").append("<li>" + event.title + " (" + event.start + ")" + " Every: " + event.weeklyRecurrence + "</li>");
    });
  }

  // Function to add To-Do item (replace with modal or form)
  function addTodoItem(text) {
    todoList.push({
      text: text,
      done: false
    });
    updateTodoList();
  }

  // Function to update To-Do list UI
  function updateTodoList() {
    $("#todo-list").empty();
    todoList.forEach(function(item, index) {
      var className = item.done ? "form-check-label text-decoration-line-through" : "form-check-label";
      $("#todo-list").append("<li><div class='form-check'><input class='form-check-input' type='checkbox' id='todo-" + index + "' " + (item.done ? "checked" : "") + "><label class='" + className + "' for='todo-" + index + "'>" + item.text + "</label></div></li>");
    });

    // Add event listener to checkboxes
    $(".form-check-input").change(function() {
      var index = $(this).attr("id").substring(5);
      todoList[index].done = $(this).prop("checked");
      todoList[index].done ? $(this).parent0().addClass("text-decoration-line-through") : $(this).parent().removeClass("text-decoration-line-through");
      updateTodoList();
    });
  }

  // Add event listener to the "Add Schedule" button
  $("#add-schedule-btn").click(function() {
    var title = $("#event-title").val();
    var date = $("#event-date").val();
    var time = $("#event-time").val();
    var weeklyRecurrence = $("#weeklyreccurrence").val();

    // Validate input fields
    if (!title || !date || !time) {
      alert("Please fill in all fields");
      return;
    }

    // Call the function to add the event to the schedule and FullCalendar
    addScheduleEvent(title, date + "T" + time, null, weeklyRecurrence);

    // Update the schedule list UI
    updateScheduleList();

    // Clear input fields
    $("#event-title").val("");
    $("#event-date").val("");
    $("#event-time").val("");
    $("#weeklyreccurrence").val("0");
  });

  // Add event listener to the "Add To-Do" button
  $("#add-todo-btn").click(function() {
    var todo = $("#todo-input").val();

    // Validate input field
    if (!todo) {
      alert("Please enter a task");
      return;
    }

    // Call the function to add the to-do item to the list
    addTodoItem(todo);

    // Update the To-Do list UI
    updateTodoList();

    // Clear input field
    $("#todo-input").val("");
  });
});
