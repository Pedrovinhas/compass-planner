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
