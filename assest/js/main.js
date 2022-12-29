let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(input.value.trim().length != 0){
        addTask();
    }
});

let addTask = ()=>{
    IdCounter++;

    let newValue = input.value;

    const newTask = `
        <div class="task-container" id="${IdCounter}">
            <tr>
                <td>${IdCounter} .-- </td>
                <td>${newValue}</td>
                <td><input type="checkbox"></td>
                <td><img src="./assest/images/delete.png" class="closeBtn"></td>
            </tr>
        </div>
    `;
    list.innerHTML += newTask;
    input.value = '';
    updateStats();
}

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
    }else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);
    }
});

let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `Tareas Totales: ${element.length} Realizadas: ${checkbox.length}`;
};

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};