let rnd = (l,u) => Math.random() * (u-l) + l
let scene, box, boxes = [];
window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
 for(let i=0;i<11;i++){
  let x = rnd(-20, 15);
  let z = rnd(-20, 15);
  let b = new Box(x, 1, z);
  boxes.push(b);
 }
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
for(let b of boxes){
    b.blast();
}

  window.requestAnimationFrame( loop )
  
}