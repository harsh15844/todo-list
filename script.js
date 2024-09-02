let tasks = [];
let id = 0;
let addBtn = document.getElementById("addBtn");

addBtn.setAttribute("onclick","updateTasks();");

function updateTasks(){
    let val = document.getElementById("input");
    let div = document.getElementById("tasks");
    let resHTML = ``;
    if(val.value){
        div.innerHTML+=`<div class="elem" id="${id}">
                    <h1>${val.value}</h1>
                    <button id="dltBtn${id}" onclick="removeItem(${id})">Delete</button>
                </div>`;
    }
    id++;
    val.value='';
}
function removeItem(index){
    tasks.splice(index,1);
    document.getElementById(`${index}`).remove();
}

function checkEnter(event){
    if(event.key === "Enter"){
        updateTasks();
    }
}