
function Tasks(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;

}

const taskList = []

function addTaskToScreen() {
    const rightDiv = document.querySelector(".rightDiv")
    const container = document.querySelector(".contDiv")


    if (!document.getElementById('randomDiv')) {
        const randomDiv = document.createElement('div');
        randomDiv.id = 'randomDiv';

        const subTitle = document.createElement('h2');
        subTitle.id = 'subTitle';
        subTitle.innerHTML = "My projects";

        randomDiv.append(subTitle)
        rightDiv.append(randomDiv)

        rightDiv.append(randomDiv)
        container.append(rightDiv)



    }


}


function addTaskToList() {
    const title = document.querySelector('.taskTitle');
    const description = document.querySelector('.taskdescription');
    const date = document.querySelector(".taskdate")
    const priority = document.getElementById('myCheckbox');

    const newTask = new Tasks(title.textContent, description.textContent, date.value, priority.checked)
    taskList.push(newTask);
    console.log(newTask)


}

function display() {
    const oneTask = document.createElement("div")
    oneTask.className = 'oneTask'

    const checkDiv = document.createElement("div")
    checkDiv.className = 'checkDiv'

    const checkDivHeading = document.createElement("h2")
    checkDivHeading.className = 'checkDivHeading'
    checkDivHeading.textContent = 'Priority'

    const label = document.createElement("label");
    label.setAttribute("for", "myCheckbox");
    label.className = "checkbox-label";
    label.classList.add("labelDiv")
    label.textContent = "high "

    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.className = "checkbox-input";
    checkboxInput.classList.add('checkInput')
    checkboxInput.id = "myCheckbox";

    const mediumLabel = document.createElement("label");
    mediumLabel.setAttribute("for", "myCheckbox");
    mediumLabel.className = "checkbox-mediumLabel";
    mediumLabel.classList.add("labelDiv")
    mediumLabel.textContent = "medium "

    const mediumInput = document.createElement("input");
    mediumInput.setAttribute("type", "checkbox");
    mediumInput.className = "checkbox-input";
    mediumInput.classList.add('checkInput')
    mediumInput.id = "myCheckbox";

    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "myCheckbox");
    lowLabel.className = "checkbox-lowLabel";
    lowLabel.classList.add("labelDiv")
    lowLabel.textContent = "low "

    const lowInput = document.createElement("input");
    lowInput.setAttribute("type", "checkbox");
    lowInput.className = "checkbox-input";
    lowInput.classList.add('checkInput')
    lowInput.id = "myCheckbox";

    checkDiv.append(label, checkboxInput, mediumLabel, mediumInput, lowLabel, lowInput)


    const titleDesc = document.createElement("h2");
    titleDesc.className = " taskdesc";
    titleDesc.textContent = "Title"

    const title = document.createElement("div")
    title.setAttribute("contentEditable", "true")
    title.className = 'taskTitle'

    const labelDesc = document.createElement("h2");
    labelDesc.className = "taskdesc";
    labelDesc.textContent = "description"

    const description = document.createElement("div")
    description.setAttribute("contentEditable", "true")
    description.className = 'taskdescription'


    const dueDate = document.createElement("dueDate");
    dueDate.setAttribute("for", "taskDate");
    dueDate.className = "dueDate";
    dueDate.textContent = "Due Date"

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "taskDate");
    dateInput.classList.add("taskdate");



    const deleteBtn = document.createElement("button")
    deleteBtn.className = 'taskdeleteBtn'
    deleteBtn.innerHTML = ''
    // start


    const trashSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    trashSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    trashSvg.setAttribute("viewBox", "0 0 24 24");
    trashSvg.setAttribute("height", "30px"); // Set height
    trashSvg.setAttribute("width", "30px"); // 
    trashSvg.setAttribute("backgroundColor", "steelBlue")
    trashSvg.style.marginLeft = "5px";
    const trashSvg2 = document.createElementNS("http://www.w3.org/2000/svg", "title");
    trashSvg2.textContent = ' delete';
    trashSvg.appendChild(trashSvg2);

    // Create a path element within the SVG
    const svgPathTrash = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPathTrash.setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z");
    svgPathTrash.style.fill = "#0513e0"
    trashSvg.appendChild(svgPathTrash);

    deleteBtn.style.display = "flex"; // Use flexbox for layout
    deleteBtn.style.alignItems = "center";

    deleteBtn.append(trashSvg)

    trashSvg.style.transition = "fill 0.3s"; // Smooth transition for color change
    deleteBtn.addEventListener("mouseenter", () => {
        svgPathTrash.style.fill = "red"; // Change the color to red on hover
    });
    deleteBtn.addEventListener("mouseleave", () => {
        svgPathTrash.style.fill = "#00A676"; // Revert the color back to its original state when not hovered
    });


    // end
    const saveBtn = document.createElement("button")
    saveBtn.className = 'tasksaveBtn'
    saveBtn.innerHTML = 'Save'

    const saveDelete = document.createElement('div')
    saveDelete.className = 'saveDelete'
    saveDelete.append(deleteBtn, saveBtn)

    const rightDiv = document.querySelector(".rightDiv")
    const container = document.querySelector(".contDiv")

    const selectOptions = document.createElement('div')
    selectOptions.id = 'selectOptions'
    selectOptions.append(dueDate, dateInput, checkDivHeading, checkDiv, saveDelete)


    oneTask.append(titleDesc, title, labelDesc, description, selectOptions)
    // oneTask.append(label);
    rightDiv.append(oneTask)
    container.append(rightDiv)

    const save = document.querySelector(".tasksaveBtn")
    console.log(save)
    save.addEventListener("click", () => {
        console.log("hello")
        addTaskToList()
    })

    deleteBtn.addEventListener('click', () => {
        checkboxInput.cheked = ''
        mediumInput.checked = ''
        lowInput.checked = ''

        title.textContent = ''
        description.textContent = ''
        dateInput.date = ''

    })
}






export { Tasks, addTaskToScreen, display }

