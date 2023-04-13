let block = document.querySelector(".block");
let moves;
let b;
block.ondragstart = function () {
  return false;
};

block.addEventListener("mousedown", function (event) {
  block.style.position = "absolute";
  block.style.zIndex = 100;
  document.body.append(block);
  moves = true;
  b = [block.style.left,block.style.top];
  console.log(b);
});
document.addEventListener("mousemove", function (event) {
  if (moves == true) {
    debugger
    block.style.left = +b[0] + event.pageX - block.offsetWidth / 2 + "px";
    block.style.top = +b[1] + event.pageY - block.offsetHeight / 2 + "px";
  }
});
block.addEventListener("mouseup", function () {
  moves = false;
});
