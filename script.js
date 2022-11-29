
// Creating the master container for the box containers to go in
const masterContainer = document.querySelector('#master-container');
masterContainer.style.display = 'flex';
masterContainer.style.flexDirection = 'column';
masterContainer.style.justifyContent = 'center';
masterContainer.style.alignItems = 'center';

//function that creates 16 boxes on load of the window
window.onload = function() {
    createGridContainer();
  };
function createGridContainer () {
// Creates box containers inside of the master container for the boxes to go into
    for (let i = 1; i <= 16; i++) {

    const boxContain = document.createElement('div')
    boxContain.style.display = 'flex';
    boxContain.style.border = '0px solid';
    boxContain.style.width = '30%';
    masterContainer.appendChild(boxContain)

// Creates boxes and puts them into the container
    for (let i = 1; i <= 16; i++) {

    let box = document.createElement('div');
    box.style.display = '1';
    box.style.padding = '3%';
    box.style.border = '1px solid grey';
    box.style.backgroundColor = 'black'
    boxContain.appendChild(box);

}
}
}
