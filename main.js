// page 1

const button2 = document.querySelector('#button2');

const moveButton = () => {
  var x = Math.random() * (window.innerWidth - button2.offsetWidth);
  var y = Math.random() * (window.innerHeight - button2.offsetHeight);

  button2.style.position = 'absolute';
  button2.style.left = `${x}px`;
  button2.style.top = `${y}px`;
}

button2.addEventListener('click', moveButton);
button2.addEventListener('mouseenter', moveButton);

function page2() {
    window.location.href = "./page2.html";
}

// page 2
function wrongAnswer() {
    window.location.href = "./wrongpage.html";
}

function correctAnswer() {
    window.location.href = "./page3.html";
}

// wrong page
function back() {
    window.location.href = "./page2.html";
}

// page 3
function gift1() {
    window.location.href = "./gift1.html";
}

function gift2() {
    window.location.href = "./gift2.html";
}

function gift3() {
    window.location.href = "./gift3.html";
}