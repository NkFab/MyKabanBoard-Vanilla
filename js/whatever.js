//Scrolling effect
document.addEventListener("scroll", () => {
  var nav = document.querySelector("#nav");
  var scroll = window.pageYOffset;
  scroll > 0 ? nav.classList.add("active") : nav.classList.remove("active");
});

//Adding a task
const add = document.getElementById("add");
add.addEventListener("click", e => {
  e.preventDefault();
  const target = document.querySelector("#backlog");
  return target.appendChild(createTask());
});

let order = 1;
const createTask = () => {
  let task = document.createElement("div");
  task.classList.add("task");
  task.id = `task-${order}`;
  task.draggable = true;
  task.addEventListener("dragstart", e => {
    e.preventDefault();
    e.dataTransfer("text", e.target.id);
  });
  task.addEventListener("dragend", e => {});
};
