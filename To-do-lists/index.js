const listEl = document.querySelector(".list");
const formEl = document.querySelector(".form");
let inputTextEl = document.querySelector(".input-text");


let list = JSON.parse(localStorage.getItem("list"));
if(list){
    list.forEach((task)=>{
       toDoList(task);
    });
}


formEl.addEventListener("submit",(event)=>{
   event.preventDefault();
  if(inputTextEl){
    toDoList();
  }
   
});


function toDoList(tasks){
    let task =inputTextEl.value;
    if(tasks){
        task = tasks.name;
    }
    console.log(task);
   
    const newList = document.createElement("li");
    if(tasks && tasks.checked){
      newList.classList.add("checked");   
    }
    newList.classList.add("list-item");
    newList.innerText = task;
    listEl.appendChild(newList); 
    inputTextEl.value ="";

    const checkBtn = document.createElement("div");
    checkBtn.innerHTML=`<i class="fa-solid fa-square-check"></i>`;
    newList.appendChild(checkBtn);

    const deleteBtn = document.createElement("div");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    newList.appendChild(deleteBtn);

    checkBtn.addEventListener("click",()=>{
        console.log("checked");
        newList.classList.toggle("checked");
        updateLocalStorage()
    });
    deleteBtn.addEventListener("click",()=>{
       newList.remove();
       updateLocalStorage()
    });
    updateLocalStorage()
}

function updateLocalStorage(){
    const lis = document.querySelectorAll("li");
        
    let list = [];
    lis.forEach(liEl=>{
     list.push({
        name:liEl.innerText,
        checked:liEl.classList.contains("checked")
     });
    });

    localStorage.setItem("list",JSON.stringify(list));
}