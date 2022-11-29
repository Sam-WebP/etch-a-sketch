
// Creating the master container for the box containers to go in
const masterContainer = document.querySelector('#master-container');
    masterContainer.style.display = 'flex';
    masterContainer.style.flexDirection = 'column';
    masterContainer.style.justifyContent = 'center';
    masterContainer.style.alignItems = 'center';
    masterContainer.style.height = '352px';

//Creating the slider
let slider = document.getElementById("myRange");
let sliderOutput = 16
let gridSize



slider.oninput = function() {
    sliderOutput = this.value;
    createGridContainer(sliderOutput);
    document.querySelectorAll(".boxClass").forEach(e => e.addEventListener("mouseover", (event) =>{event.target.style.backgroundColor = "purple";}));
  }

//function that creates 16x16 grid on load of the window
window.onload = function() {
    firstLoad();
  };
  
function createGridContainer (gridSize) {
   
// Clear any existing boxes & containers before creating the next batch    

document.querySelectorAll(".containClass").forEach(e => e.remove());

// Creates box containers inside of the master container for the boxes to go into
    for (let i = 1; i <= gridSize; i++) {

     boxContain = document.createElement('div')
        boxContain.style.display = 'flex';
        boxContain.style.border = '0px solid';
        boxContain.style.width = '352px'; //length of each row
        boxContain.style.height = '70.4px'; //height of each row should equal i/width
        boxContain.classList.add('containClass');
        masterContainer.appendChild(boxContain)

// Creates boxes and puts them into the container
    for (let i = 1; i <= gridSize; i++) {

     box = document.createElement('div');
        box.style.display = 'flex';
        box.style.flexGrow = '1';
        box.style.padding = 'auto';
        //box.style.border = '1px solid grey';
        box.style.backgroundColor = 'black';
        box.classList.add('boxClass');
        boxContain.appendChild(box);

}
}
}

function firstLoad() {

// Creates box containers inside of the master container for the boxes to go into
    for (let i = 1; i <= 16; i++) {

     boxContain = document.createElement('div')
        boxContain.style.display = 'flex';
        boxContain.style.border = '0px solid';
        boxContain.style.width = '352px'; //length of each row
        boxContain.style.height = '70.4px'; //height of each row should equal i/width
        boxContain.classList.add('containClass');
        masterContainer.appendChild(boxContain)

// Creates boxes and puts them into the container
    for (let i = 1; i <= 16; i++) {

     box = document.createElement('div');
        box.style.display = 'flex';
        box.style.flexGrow = '1';
        box.style.padding = 'auto';
        //box.style.border = '1px solid grey';
        box.style.backgroundColor = 'black';
        box.classList.add('boxClass');
        document.querySelectorAll(".boxClass").forEach(e => e.addEventListener("mouseover", (event) =>{event.target.style.backgroundColor = "purple";}));
        boxContain.appendChild(box);

}
}
}

