const form = document.querySelector(".add-form");
const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".add-input");
const todoList = document.querySelector(".list");
const time = dayjs();
const currrentTime = time.format("D/M/YYYY");

const todoTemplate = function (todo) {
  const html = ` <li>
  <div class = "first-section" >
  <span class = "item" >${todo}</span> 
  <span class = "time" >${currrentTime}</span> 
  </div>
   <div class = "icons" >
   <button class = "done ">Done</button>
   <button class = "delete" >Delete</button>
  </div> 

 
</li>

`;
  todoList.innerHTML += html;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = input.value.trim();
  if (todo === "") {
    alert("plz fill the input field");
  } else {
    todoTemplate(todo);
  }
  form.reset();
});
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    e.target.parentElement.parentElement.remove();
  }
});
