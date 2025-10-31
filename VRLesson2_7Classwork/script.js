let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;

dudes=[];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i=0;i<20;i++){
    x=rnd(-20, 20)
    z=rnd(-20, 20)
    let d = new Dude(x, 1, z);
    dudes.push(d);
  }
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(d of dudes){
    

  }
  window.requestAnimationFrame( loop );
}