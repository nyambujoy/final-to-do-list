// alert("hello world")
import './css/index.css'
function handlePage() {
    const container = document.createElement('div')
    container.className = 'contDiv'

    const leftDiv = document.createElement('div')
    leftDiv.className = 'leftDiv'
    const rightDiv = document.createElement('div')
    rightDiv.className = 'rightDiv'


    // leftdiv

    const title = document.createElement('h2')
    title.className = 'title'
    title.innerHTML = 'your planner'
    // title.classList.add("round")

    const personalBtn = document.createElement("button");
    personalBtn.innerHTML = "Personal";
    personalBtn.classList.add("navBtn");
    personalBtn.id = "personalBtn";
    personalBtn.classList.add('leftButtons')

    const personSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    personSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    personSvg.setAttribute("viewBox", "0 0 24 24");
    personSvg.setAttribute("height", "30px"); // Set height
    personSvg.setAttribute("width", "30px"); // 
    personSvg.style.marginLeft = "5px";
    const svgperson = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgperson.textContent = "home";
    personSvg.appendChild(svgperson);

    // Create a path element within the SVG
    const svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath2.setAttribute("d", "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z");
    personSvg.appendChild(svgPath2);
    personalBtn.style.display = "flex"; // Use flexbox for layout
    personalBtn.style.alignItems = "center";
    personalBtn.append(personSvg)

    // coding


    const schoolBtn = document.createElement("button");
    schoolBtn.innerHTML = "SCHOOL";
    schoolBtn.classList.add("navBtn");
    schoolBtn.id = "schoolBtn";
    schoolBtn.classList.add('leftButtons')

    const schoolSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    schoolSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    schoolSvg.setAttribute("viewBox", "0 0 24 24");
    schoolSvg.setAttribute("height", "30px"); // Set height
    schoolSvg.setAttribute("width", "30px"); // 
    schoolSvg.style.marginLeft = "5px";
    const svgschool = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgschool.textContent = "home";
    schoolSvg.appendChild(svgschool);

    // Create a path element within the SVG
    const svgPath3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath3.setAttribute("d", "M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z");
    schoolSvg.appendChild(svgPath3);
    schoolBtn.style.display = "flex"; // Use flexbox for layout
    schoolBtn.style.alignItems = "center";
    schoolBtn.append(schoolSvg)

    // work

    const workBtn = document.createElement("button");
    workBtn.innerHTML = "WORK";
    workBtn.classList.add("navBtn");
    workBtn.id = "workBtn";
    workBtn.classList.add('leftButtons')

    const workSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    workSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    workSvg.setAttribute("viewBox", "0 0 24 24");
    workSvg.setAttribute("height", "30px"); // Set height
    workSvg.setAttribute("width", "30px"); // 
    workSvg.style.marginLeft = "5px";
    const svgwork = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgwork.textContent = "home";
    workSvg.appendChild(svgwork);

    // Create a path element within the SVG
    const svgPath4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath4.setAttribute("d", "M20,6C20.58,6 21.05,6.2 21.42,6.59C21.8,7 22,7.45 22,8V19C22,19.55 21.8,20 21.42,20.41C21.05,20.8 20.58,21 20,21H4C3.42,21 2.95,20.8 2.58,20.41C2.2,20 2,19.55 2,19V8C2,7.45 2.2,7 2.58,6.59C2.95,6.2 3.42,6 4,6H8V4C8,3.42 8.2,2.95 8.58,2.58C8.95,2.2 9.42,2 10,2H14C14.58,2 15.05,2.2 15.42,2.58C15.8,2.95 16,3.42 16,4V6H20M4,8V19H20V8H4M14,6V4H10V6H14Z");
    workSvg.appendChild(svgPath4);
    workBtn.style.display = "flex"; // Use flexbox for layout
    workBtn.style.alignItems = "center";
    workBtn.append(workSvg)

    // fitness
    const fitnessBtn = document.createElement("button");
    fitnessBtn.innerHTML = "FITNESS";
    fitnessBtn.classList.add("navBtn");
    fitnessBtn.id = "fitnessBtn";
    fitnessBtn.classList.add('leftButtons')

    const fitnessSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    fitnessSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    fitnessSvg.setAttribute("viewBox", "0 0 24 24");
    fitnessSvg.setAttribute("height", "30px"); // Set height
    fitnessSvg.setAttribute("width", "30px"); //
    fitnessSvg.style.marginLeft = "5px";
    fitnessSvg.style.color = "#cd2028"
    const svgfitness = document.createElementNS("http://www.w3.org/2000/svg", "title");
    svgfitness.textContent = "home";
    fitnessSvg.appendChild(svgfitness);

    // Create a path element within the SVG
    const svgPath5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgPath5.setAttribute("d", "M12 5C10.89 5 10 5.89 10 7S10.89 9 12 9 14 8.11 14 7 13.11 5 12 5M22 1V6H20V4H4V6H2V1H4V3H20V1H22M15 11.26V23H13V18H11V23H9V11.26C6.93 10.17 5.5 8 5.5 5.5L5.5 5H7.5L7.5 5.5C7.5 8 9.5 10 12 10S16.5 8 16.5 5.5L16.5 5H18.5L18.5 5.5C18.5 8 17.07 10.17 15 11.26Z");
    fitnessSvg.appendChild(svgPath5);
    fitnessBtn.style.display = "flex"; // Use flexbox for layout
    fitnessBtn.style.alignItems = "center";
    fitnessBtn.append(fitnessSvg);
    fitnessBtn.classList.add('leftButtons')

    // addTask
    const addTask = document.createElement('button')
    addTask.className = 'addTask'
    addTask.innerHTML = '+'
    addTask.classList.add("round")

    leftDiv.querySelector(".leftDiv")
    leftDiv.append(title, personalBtn, schoolBtn, workBtn, fitnessBtn, addTask)

    container.append(leftDiv, rightDiv)

    const content = document.querySelector(".container")
    content.append(container)
    // fitnessBtn.classList.add(leftButtons)
}

handlePage()