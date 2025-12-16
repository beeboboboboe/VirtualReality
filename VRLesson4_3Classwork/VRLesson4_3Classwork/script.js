let rnd = (l,u) => Math.random()*(u-l)+l;
let scene, ball, balls=[];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  //Challenge 2: Create 200 Balls at random locations and watch them fall or push them off the end
  for(let i=0;i<201;i++){
    let x=rnd(-20, 20);
    let z=rnd(-20, 20);
    let b = new Ball(x, 1, z);
    balls.push(b);
  }
  
})