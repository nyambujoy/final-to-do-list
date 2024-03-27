
function Tasks(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;

}

const taskList = [];

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
    const title = document.querySelector('.taskTitle').textContent;
    const description = document.querySelector('.taskdescription').textContent;
    const date = document.querySelector(".taskdate").value
    // const priority = document.getElementById('myCheckbox');

    let priority;
    const highInput = document.getElementById('highCheckbox');
    const mediumInput = document.getElementById('mediumCheckbox');
    const lowInput = document.getElementById('lowCheckbox');

    if (highInput.checked) {
        priority = "High";

    } else if (mediumInput.checked) {
        priority = "Medium";
    } else if (lowInput.checked) {
        priority = "Low";
    } else {
        // If no priority is selected, default to "Medium" or handle as needed
        priority = "Medium";
    }

    const newTask = new Tasks(title, description, date, priority)
    taskList.push(newTask);
    // console.log(taskList)
    return taskList


}

function display() {
    const oneTask = document.createElement("div");
    oneTask.className = 'oneTask';

    const checkDiv = document.createElement("div");
    checkDiv.className = 'checkDiv';

    const checkDivHeading = document.createElement("h2");
    checkDivHeading.className = 'checkDivHeading';
    checkDivHeading.textContent = 'Priority';

    const highLabel = document.createElement("label");
    highLabel.setAttribute("for", "highCheckbox");
    highLabel.className = "checkbox-label";
    highLabel.textContent = "High";

    const highInput = document.createElement("input");
    highInput.setAttribute("type", "checkbox");
    highInput.className = "checkbox-input";
    highInput.classList.add('checkInput');
    highInput.id = "highCheckbox";

    const mediumLabel = document.createElement("label");
    mediumLabel.setAttribute("for", "mediumCheckbox");
    mediumLabel.className = "checkbox-mediumLabel";
    mediumLabel.textContent = "Medium";

    const mediumInput = document.createElement("input");
    mediumInput.setAttribute("type", "checkbox");
    mediumInput.className = "checkbox-input";
    mediumInput.classList.add('checkInput');
    mediumInput.id = "mediumCheckbox";

    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "lowCheckbox");
    lowLabel.className = "checkbox-lowLabel";
    lowLabel.textContent = "Low";

    const lowInput = document.createElement("input");
    lowInput.setAttribute("type", "checkbox");
    lowInput.className = "checkbox-input";
    lowInput.classList.add('checkInput');
    lowInput.id = "lowCheckbox";

    checkDiv.append(highLabel, highInput, mediumLabel, mediumInput, lowLabel, lowInput);
    // oneTask.append(checkDivHeading, checkDiv);


    // checkDiv.append(label, checkboxInput, mediumLabel, mediumInput, lowLabel, lowInput)


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
    // oneTask.append(checkDivHeading, checkDiv);


    oneTask.append(titleDesc, title, labelDesc, description, selectOptions)
    // oneTask.append(label);
    rightDiv.append(oneTask)
    container.append(rightDiv)

    const save = document.querySelector(".tasksaveBtn")
    // console.log(save)
    save.addEventListener("click", () => {
        // console.log("hello")
        addTaskToList()
        presentToScreen(taskList)
    })

    deleteBtn.addEventListener('click', () => {
        highInput.cheked = ''
        mediumInput.checked = ''
        lowInput.checked = ''

        title.textContent = ''
        description.textContent = ''
        dateInput.date = ''

    })
}


function presentToScreen(taskList) {
    const unOrdered = document.createElement('ul')
    const centerDiv = document.querySelector('.centerDiv')
    centerDiv.textContent = ''
    const head = document.createElement('h1')
    head.textContent = 'Personal Tasks'
    head.id = 'head'
    centerDiv.append(head)

    if (!unOrdered) {
        unOrdered = document.createElement('ul');
        centerDiv.appendChild(unOrdered);
    } else {
        // If there's an existing ul element, clear its content
        unOrdered.innerHTML = '';
    }


    for (let i = 0; i < taskList.length; i++) {
        // console.log(taskList[i])
        // const task = taskList[i];


        let listItem = document.createElement('li')
        listItem.className = 'listItem'

        const titleDivhead = document.createElement("h2");
        titleDivhead.classList.add("titleDivhead")
        titleDivhead.textContent = 'Title'


        const titleDiv = document.createElement("h2");
        titleDiv.classList.add("titleH2")
        titleDiv.textContent = taskList[i].title;
        titleDiv.setAttribute("contenteditable", "true"); // Make titleDiv editable
        titleDiv.addEventListener("blur", function () {
            taskList[i].title = titleDiv.textContent; // Update library data when editing is finished
        });
        // displayDiv.appendChild(titleDiv);

        const descDivHead = document.createElement("h2");
        descDivHead.classList.add("descDivHead")
        descDivHead.textContent = 'Description'

        const descDiv = document.createElement("p");
        descDiv.classList.add("descDiv")
        descDiv.textContent = taskList[i].description;
        descDiv.setAttribute("contenteditable", "true")
        descDiv.addEventListener("blur", () => {
            taskList[i].description = descDiv.textContent
        })

        const dateDivTitle = document.createElement("h3");
        dateDivTitle.classList.add("dateDivTitle")
        dateDivTitle.textContent = 'Due on'

        const dateDiv = document.createElement("span");
        dateDiv.classList.add("dateDiv")
        dateDiv.textContent = taskList[i].date;
        dateDiv.setAttribute("contenteditable", "true")
        dateDiv.addEventListener("blur", () => {
            taskList[i].date = dateDiv.textContent
        })

        const dateUp = document.createElement("div")
        dateUp.append(dateDivTitle, dateDiv)
        dateUp.className = 'dateUp'

        const priorityDivHeading = document.createElement("h3");
        priorityDivHeading.id = 'priorityDivHeading'
        priorityDivHeading.textContent = 'Priority'


        const priorityDiv = document.createElement("div");
        priorityDiv.classList.add("priorityDiv")
        priorityDiv.textContent = taskList[i].priority;
        // priorityDiv.setAttribute("contenteditable", "true")
        priorityDiv.addEventListener("blur", () => {
            taskList[i].priority = priorityDiv.textContent
        })

        const priorityup = document.createElement("div")
        priorityup.append(priorityDivHeading, priorityDiv)
        priorityup.id = 'priorityup'

        // const deleteBtn = document.createElement('button')
        // deleteBtn.textContent = 'delete'
        // deleteBtn.className =

        // new
        const deleteBtn = document.createElement("button")
        deleteBtn.className = 'delete'
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
        svgPathTrash.style.fill = "#00A676"
        trashSvg.appendChild(svgPathTrash);

        deleteBtn.style.display = "flex"; // Use flexbox for layout
        deleteBtn.style.alignItems = "center";

        deleteBtn.append(trashSvg)
        listItem.append(titleDivhead, titleDiv, descDivHead, descDiv, dateUp, priorityup, deleteBtn)
        unOrdered.append(listItem)
        console.log(listItem)
        centerDiv.append(unOrdered)

        deleteBtn.addEventListener('click', (e) => {


        })
    }
    // console.log(unOrdered);


}



export { Tasks, addTaskToScreen, display }

