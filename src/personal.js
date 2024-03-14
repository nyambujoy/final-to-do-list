
function Tasks(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;

}

const taskList = []

function addTaskToScreen() {
    const rightDiv = document.querySelector(".rightDiv")


    if (!document.getElementById('randomDiv')) {
        const randomDiv = document.createElement('div');
        randomDiv.id = 'randomDiv';

        const subTitle = document.createElement('h2');
        subTitle.id = 'subTitle';
        subTitle.innerHTML = "My projects";

        const addBtn = document.createElement('button');
        addBtn.id = 'addBtn';
        addBtn.innerHTML = "+ Add Btn";

        randomDiv.append(subTitle, addBtn)
        rightDiv.append(randomDiv)

        rightDiv.append(randomDiv)



    }




}


function addTaskToList() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const priority = document.getElementById('taskPriority').value;

    const newTask = new Book(title, description, priority)
    taskList.push(newTask);

    displayLibrary()
}

function display() {
    const oneTask = document.createElement("div")
    oneTask.className = 'oneTask'

    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.className = "checkbox-input";
    checkboxInput.id = "myCheckbox";

    const label = document.createElement("label");
    label.setAttribute("for", "myCheckbox");
    label.className = "checkbox-label";

    const title = document.createElement("input")
    title.setAttribute("contentEditable", "true")
    title.className = 'taskTitle'

    const description = document.createElement("input")
    description.setAttribute("contentEditable", "true")
    description.className = 'taskdescription'

    const deleteBtn = document.createElement("button")
    deleteBtn.className = 'taskdeleteBtn'
    deleteBtn.innerHTML = 'del'

    const saveBtn = document.createElement("button")
    saveBtn.className = 'tasksaveBtn'
    saveBtn.innerHTML = 'Save'


    oneTask.append(checkboxInput, title, description, deleteBtn, saveBtn)
}




export { Tasks, addTaskToScreen }

