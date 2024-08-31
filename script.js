let tasks = [];

let addBtn = document.getElementById("addBtn");

addBtn.setAttribute("onclick","updateTasks();");

function showList(){
    let div = document.getElementById("tasks");
    let resHTML = ``;

    for(let i = 0;i<tasks.length;i++){
        resHTML+=`<div class="elem">
                    <h1>${tasks[i]}</h1>
                    <button id="dltBtn${i}">Delete</button>
                </div>`
    }
    div.innerHTML = resHTML;

    for(let i = 0;i<tasks.length;i++){
        document.getElementById(`dltBtn${i}`).setAttribute("onclick",`removeItem(${i})`);
    }
}

function updateTasks(){
    let val = document.getElementById("input");
    if(val.value){
        tasks.push(val.value);
    }
    val.value='';
    showList();
}
function removeItem(index){
    tasks.splice(index,1);
    console.log(tasks);
    showList();
}

function checkEnter(event){
    if(event.key === "Enter"){
        updateTasks();
    }
}