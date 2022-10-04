// Formulário
const activitiesContent = document.querySelector(".form-input__activities");
const addTaskButton = document.querySelector(".planner-bar__add");
const cardItem = document.querySelector(".card-tasks__item");
const selectedDay = document.getElementById("option-day");
const plannerDaysOfWeek = document.querySelectorAll("[data-day]");
const dayTime = document.getElementById("option-time");
const excludeAllTaskBtn = document.querySelector(".planner-bar__exclude");

const planner = document.querySelector(".planner-calendar__table");

const cardTime = document.querySelectorAll(".hours__card");


excludeAllTaskBtn.addEventListener("click", excludeAllTasksFromOneDay);

function excludeAllTasksFromOneDay() {
  deletedTaskList = taskList.filter((item) => item.dayOfWeek != selectedDay.value)
  console.log(deletedTaskList)
  taskList = deletedTaskList

  alert(`Tarefas de ${selectedDay.value} excluídas com sucesso`)
  displayTaskList(taskList);
}

const plannerForm = document.querySelector("#form");

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (activitiesContent.value !== "") {
    addTask(activitiesContent.value);
    activitiesContent.value = "";
  } else {
    alert("Preencha os campos em branco");
  }
});

// Renderiza a lista de atividadaes
function displayTaskList(list) {
  const cardTasks = document.getElementById("tasks-card");
  cardTasks.innerHTML = "";
  console.log(list);
  list.forEach((task) => {
    const plannerItem = document.createElement("div");
    plannerItem.classList.add("planner-item");

    const tableHours = document.createElement("ul");
    tableHours.classList.add("table__hours");

    const cardHours = document.createElement("li");
    cardHours.classList.add("hours__card");
 
    // task.dayOfWeek == Object.keys(dayColors[selectedDay.value]) ? cardHours.classList.add(dayColors[selectedDay.value].bg) : ''
  //  console.log(Object.getOwnPropertyNames(dayColors[selectedDay.value]))
  //  console.log(Object.keys(dayColors[selectedDay.value]))

    task.dayOfWeek == 'monday' ? cardHours.classList.add('card-color-yellow') : ''
    task.dayOfWeek == 'tuesday' ? cardHours.classList.add('card-color-green') : ''
    task.dayOfWeek == 'thursday' ? cardHours.classList.add('card-color-purple') : '' 
    task.dayOfWeek == 'friday' ? cardHours.classList.add('card-color-soft-blue') : 
    task.dayOfWeek == 'saturday' ? cardHours.classList.add('card-color-pink') : ''
    task.dayOfWeek == 'sunday' ? cardHours.classList.add('card-color-red') : ''
  


    cardHours.innerHTML = `${task.dayTime}`;

    const cardItem = document.createElement("div");
    cardItem.classList.add("card-tasks__item");
    // cardItem.classList.add(dayColors[selectedDay.value].border);

    task.dayOfWeek == 'monday' ? cardItem.classList.add('card-border-yellow') : ''
    task.dayOfWeek == 'tuesday' ? cardItem.classList.add('card-border-green') : ''
    task.dayOfWeek == 'wednesday' ? cardItem.classList.add('card-border-blue') : ''
    task.dayOfWeek == 'thursday' ? cardItem.classList.add('card-border-purple') : '' 
    task.dayOfWeek == 'friday' ? cardItem.classList.add('card-border-soft-blue') : 
    task.dayOfWeek == 'saturday' ? cardItem.classList.add('card-border-pink') : ''
    task.dayOfWeek == 'sunday' ? cardItem.classList.add('card-border-red') : ''

    const paragraph = document.createElement("p");
    const deleteBtn = document.createElement("button");

    paragraph.innerHTML = `${task.content}`;

    deleteBtn.classList.add("card__delete-button");
    deleteBtn.innerHTML = "Apagar";

    tableHours.appendChild(cardHours);

    cardItem.appendChild(paragraph);
    cardItem.appendChild(deleteBtn);

    plannerItem.appendChild(tableHours);
    plannerItem.appendChild(cardItem);

    cardTasks.appendChild(plannerItem);
    console.log(taskList);

    deleteBtn.addEventListener("click", () => {
      updatedTaskList = taskList.filter((item) => item != task);
      taskList = updatedTaskList;
      console.log(taskList);
      displayTaskList(taskList);
    });

    taskList.sort((a, b) => a.dayTimeValue - b.dayTimeValue);
  });
}

/* Local Storage - Salvar e Excluir */

const btnSaveLocalStorage = document.querySelector(".btn-save-local");
const btnDeleteFromLocalStorage = document.querySelector(".btn-exclude-local");

btnSaveLocalStorage.addEventListener("click", saveLocalStorage);
btnDeleteFromLocalStorage.addEventListener("click", deleteFromLocalStorage);

function saveLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
}

function deleteFromLocalStorage() {
  localStorage.clear();
  taskList = [];
  displayTaskList();
}
