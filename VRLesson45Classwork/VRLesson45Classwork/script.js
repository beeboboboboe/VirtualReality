let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, lamp, lamps=[];
window.onload = function(){
  scene = document.querySelector("a-scene");
  // Challenge: Create 10 random lamps
for(let i=0;i<11;){
  let x=rnd(-20, 20);
  let z=rnd(-20,20);
  let l = new Lamp(x, 0, z);
  lamps.push(l);

}

}
