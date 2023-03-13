const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.querySelector("#taskList ul");


function addTask() {
  const taskName = prompt("ingrese su tarea");
  if (taskName !== null && taskName !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `<span>${taskName}</span>
      <button class="delete">eliminar</button>
      <button class="update">actualizar</button>`;
    taskList.appendChild(newTask);
  }
}


function updateTask(event) {
  const taskName = prompt("ingrese tarea ha actualizar", event.target.parentNode.querySelector("span").innerText);
  if (taskName !== null && taskName !== "") {
    event.target.parentNode.querySelector("span").innerText = taskName;
  }
}


function deleteTask(event) {
  if (confirm("Se ha eliminado")) {
    event.target.parentNode.remove();
  }
}


addTaskBtn.addEventListener("click", addTask);


taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("update")) {
    updateTask(event);
  }
});


taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    deleteTask(event);
  }
});
