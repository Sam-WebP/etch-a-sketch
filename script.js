
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

slider.oninput = function() {
    sliderOutput = this.value;
  }

//function that creates 16x16 grid on load of the window
window.onload = function() {
    createGridContainer();
  };
  
function createGridContainer () {
// Creates box containers inside of the master container for the boxes to go into
    for (let i = 1; i <= 5; i++) {

    const boxContain = document.createElement('div')
        boxContain.style.display = 'flex';
        boxContain.style.border = '0px solid';
        boxContain.style.width = '352px'; //length of each row
        boxContain.style.height = '70.4px'; //height of each row should equal i/width
        masterContainer.appendChild(boxContain)

// Creates boxes and puts them into the container
    for (let i = 1; i <= 5; i++) {

    let box = document.createElement('div');
        box.style.display = 'flex';
        box.style.flexGrow = '1';
        box.style.padding = 'auto';
        box.style.border = '1px solid grey';
        box.style.backgroundColor = 'black';
        boxContain.appendChild(box);

}
}
}
