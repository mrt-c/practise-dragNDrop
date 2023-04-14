let block = document.querySelector(".block");
let moves, c;
let a  = block.parentElement 
let border = window.getComputedStyle(block).getPropertyValue("border").slice(0,1)
let b = [
  +a.clientWidth - block.clientWidth -(2*border),
  +a.clientHeight - block.clientHeight - (2*border)
]

block.addEventListener("mousedown", function (event) {
  block.style.position = "absolute";
  block.style.zIndex = 100;
  moves = true;
  c = [
    block.style.left.slice(0, -2) - event.pageX + block.offsetWidth / 2,
    block.style.top.slice(0, -2) - event.pageY + block.offsetHeight / 2,
  ];
});

document.addEventListener("mousemove", function (event) {
  if (moves == true) {
      block.style.left = event.pageX - block.offsetWidth / 2 + c[0] + "px";
      if (+block.style.left.slice(0, -2) < 0) {
        block.style.left = 0
      }
      if (+block.style.left.slice(0, -2) > b[0]) {
        block.style.left = b[0]+"px"
      }
      
    
    block.style.top = event.pageY - block.offsetHeight / 2 + c[1] + "px";
    if (+block.style.top.slice(0, -2) < 0) {
      block.style.top = 0
    }
    if (+block.style.top.slice(0, -2) > b[1]) {
      block.style.top = b[1]+"px"
    }
  }
});

document.addEventListener("mouseup", function () {
  moves = false;
});