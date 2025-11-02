function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="removeTask(this)">❌</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleTask(task) {
  task.parentElement.classList.toggle("completed");
}

function removeTask(btn) {
  btn.parentElement.remove();
}
