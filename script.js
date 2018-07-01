const scene = document.querySelector('a-scene');
let y = 1.5;
console.log(scene);
const face = document.querySelector('#face');
const leftAnt = document.querySelector('#antenna1');
const rightAnt = document.querySelector('#antenna2');
const mouth = document.querySelector('#mouth');
const words = document.querySelector('#hello');
const scaleButton = document.querySelector('#sphere1');
const head = document.querySelector('#robot');
const bgButton = document.querySelector('#sphere2');
const bg = document.querySelector('a-sky');

face.addEventListener('click', turnOn);
leftAnt.addEventListener('click', changeLeftAnt);
rightAnt.addEventListener('click', changeRightAnt);
mouth.addEventListener('mouseenter', talk);
mouth.addEventListener('mouseleave', quiet);
scaleButton.addEventListener('click', grow);
bgButton.addEventListener('click', changebg);

function grow() {
    console.log("change scale");
    head.setAttribute('scale', {x:5, y:5, z:5});
    
}

function changebg () {
    console.log("change background");
    bg.setAttribute('src', "mountains.jpg")
    
    
}


function talk () {
    console.log("in mouth");
    words.setAttribute('visible', "true")
    
}

function quiet () {
        console.log("out of mouth");
            words.setAttribute('visible', "false")
}

function changeLeftAnt(){
    console.log("left antenna clicked")
    leftAnt.setAttribute('color', "purple");
    leftAnt.setAttribute('rotation', "0 0 0");
    
    // leftAnt.innerHTML += `<a-animation attribute="rotation" from="0 0 20" to="0 0 0" delay="0" easing="linear"></a-animation>;
}

function changeRightAnt(){
        console.log("right antenna clicked")
    rightAnt.setAttribute('color', "purple");
    rightAnt.setAttribute('rotation', "0 0 0");
}

function turnOn() {
    console.log("face clicked");
    let eye1 = document.querySelector('#leftEye');
    eye1.setAttribute('color', "yellow");
    let eye2 = document.querySelector('#rightEye');
    eye2.setAttribute('color', "yellow");
}

function addbox() {
    console.log("face clicked");
    y += 1;
    let newBox = document.createElement('a-box');
    newBox.setAttribute('color', "red");
    newBox.setAttribute('depth', "0.5");
    newBox.setAttribute('height', "0.5");
    newBox.setAttribute('width', "0.5");
    newBox.setAttribute('position', { x: 0, y: y, z: -5 });
    scene.appendChild(newBox);
    console.log(scene);
}

function randBetween(a, b) {
    return (Math.floor(Math.random() * (b - a)) + a)
}
