document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const input = e.target.querySelector("#new-task-description").value;

    const ul = document.getElementById("tasks");
    const li = document.createElement("li");
    li.textContent = input;
    ul.appendChild(li);

    e.target.reset();
  });
});

  // your code here

