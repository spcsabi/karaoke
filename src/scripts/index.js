const box = document.querySelector("#box");

let started;
let clicked;
let best = Infinity;

box.onmouseenter = () => {
  if (!started) {
    started = Date.now();
  } else {
    clicked = Date.now();
    
    const diff = clicked - started;
    
    if (diff < best) {
      best = diff;
    }

    started = null;
    clicked = null;

    display();
  }

  change();
}

function random(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function change() {
  const w = window.innerWidth - 50;
  const h = window.innerHeight - 50;

  const x = random(0, w);
  const y = random(50, h);

  box.style.top = y + "px";
  box.style.left = x + "px";
}

function display() {
  const result = document.querySelector("#result");
  result.innerText = "Best: " + best + "ms";
}