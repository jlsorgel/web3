const canvas = document.getElementById("Game");
const context = canvas.getContext('2d');


let cPosX = canvas.width / 2;
let cPosY = canvas.height / 2;
let cVelX = 3.4;
let cVelY = 4.2;
let cRad = 60;


let rSlider = document.getElementById("redSlider");
let gSlider = document.getElementById("greenSlider");
let bSlider = document.getElementById("blueSlider");



let stopped = false;
let grow = false;

let cColor = "rgb(255, 200, 0)";

var clicks = 0;






function draw() {

  context.clearRect(0, 0, canvas.width, canvas.height);

  drawCircle();
  if (stopped === false) {
    moveCircle();

  };

  window.requestAnimationFrame(draw);
};




function drawCircle() {
  context.fillStyle = cColor;
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 2;

  if (grow) {
    cRad += 0.6;
  }

  if (cRad >= canvas.height) {
    shrink = true;
    grow = false;
  }


  context.ellipse(cPosX, cPosY, cRad, cRad, 0, 0, 2 * Math.PI);
  context.stroke();
  context.fill();
}



function moveCircle() {
  if (cPosX + cRad >= canvas.width || cPosX - cRad <= 0) {
    cVelX *= -1;
  }
  if (cPosY + cRad >= canvas.height || cPosY - cRad <= 0) {
    cVelY = cVelY * -1;

  }

  cPosX = cPosX + cVelX;
  cPosY = cPosY + cVelY;
};

draw();



canvas.addEventListener("click", function (event) {

  let mouseXp = event.pageX - event.target.offsetLeft;
  let mouseYp = event.pageY - event.target.offsetTop;

  let distX = Math.abs(cPosX - mouseXp);
  let distY = Math.abs(cPosY - mouseYp);

  if (distX < cRad && distY < cRad) {
    console.log(clicked);

    if (!clicked) {
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
    }

    clicked = !clicked;

    grow = !grow;
  }
});


// ------------------------------
let colorChange = function () {
  console.log("Red: " + rSlider.value + " Green: " + gSlider.value + "Blue: " + bSlider.value);
  cColor = "rgb(" + rSlider.value + ", " + gSlider.value + ", " + bSlider.value + ")";
}



canvas.addEventListener("click", function (event) {
  let mouseXp = event.pageX - event.target.offsetLeft;
  let mouseYp = event.pageY - event.target.offsetTop;

  let distX = Math.abs(cPosX - mouseXp);
  let distY = Math.abs(cPosY - mouseYp);

  if (distX < cRad && distY < cRad) {
    // console.log("FIRE!!!!!");

    click += 1;
    document.getElementById("clicks").innerHTML = clicks;
    stopped = !stopped;
    grow = !grow;

  }
});

rSlider.addEventListener("change", colorChange);
gSlider.addEventListener("change", colorChange);
bSlider.addEventListener("change", colorChange);


