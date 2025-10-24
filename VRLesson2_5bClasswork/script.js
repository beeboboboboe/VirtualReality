let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, snowmen = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let tree = new Tree(x, 0 , z);
    tree.scale(rnd(1,4));
  }
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let snowman = new Snowman(x,z);
    snowmen.push(snowman);
  }

  //Challenge 1: Create an array to store 20 clouds in random positions
  cloud = new Cloud(-5,10,-1);
 let clouds=[];
 window.addEventListener("DOMContentLoaded", function(){
for(let i=0; i<20; i++){
x=rnd(-20, 20);
z=rnd(-20, 20);
let c = new Cloud(x, 20, z);
clouds.push(c)
}


 }

 )
  //Challenge 3: Create an array to store 100 snowflakes in random positions

snowflake = new Snowflake(0, 9, 0);
let snowflakes=[];
window.addEventListener("DOMContentLoaded", function*(){
for(let i=0; i<100; i++){
x=rnd(-20, 20);
z=rnd(-20, 20);
let s = new Snowflake(x, 9, z);
snowflakes.push(s);
}

})

  loop();
})

function loop(){
  for(let snowman of snowmen){
    snowman.spin();
  }
  cloud.fly();
  //Challenge 2: Traverse your array of clouds and make each cloud fly
for(c of clouds){
  c.fly();
}
  //Challenge 4: Traverse your array of snowflakes and make each snowflake fall
  for(s of snowflakes){
    s.fall();
  }
  window.requestAnimationFrame( loop );
}
