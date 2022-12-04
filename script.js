
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
    document.querySelectorAll(".boxClass").forEach(e => e.addEventListener("mouseover", (event) =>{event.target.style.backgroundColor = 'white';}));
    if (currentMode == "basic") {
      makeBasic()
      console.log(currentMode)
    } else if (currentMode == "rainbow") {
      makeRainbow()
      console.log(currentMode)
    }
  }

//function that creates 16x16 grid on load of the window
window.onload = function() {
    firstLoad();
    sliderOutput = 16
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
        document.querySelectorAll(".boxClass").forEach(e => e.addEventListener("mouseover", (event) =>{event.target.style.backgroundColor = 'white';}));
        boxContain.appendChild(box);

}
}
}

let rainbowButton = document.querySelector(".button-85")
rainbowButton.addEventListener("click", function() {makeRainbow();})

let basicButton = document.querySelector(".basic")
basicButton.addEventListener("click", function() {makeBasic()})


const psychedelicPallete = ['red', 'orange', 'aqua', 'blue', 'green', 'yellow', 'pink', 'purple'];

let currentMode = "basic"

function makeRainbow() {
  currentMode = "rainbow"
  document.querySelectorAll(".boxClass").forEach(e => e.addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = psychedelicPallete[Math.floor((Math.random() * 8) + 1)];
  }));
  
}

function makeBasic() {
  currentMode = "basic"
  document.querySelectorAll(".boxClass").forEach(e => e.addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = 'white';
    
  }));
}

let bin = document.querySelector(".bin-reset")
bin.addEventListener("click", function() {
  document.querySelectorAll(".containClass").forEach(e => e.remove());
  createGridContainer(sliderOutput);
  if (currentMode == "basic") {
    makeBasic()
    console.log(currentMode)
  } else if (currentMode == "rainbow") {
    makeRainbow()
    console.log(currentMode)
  }
})