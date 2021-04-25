document.getElementById("canvas");
var ctx = canvas.getContext("2d");

mx = 0;
my = 0;
up = 0;
left = 0;
right = 0;
down = 0;
moving = 0;
pox = 0;
poy = 0;
pxx = 420;
maplength = 40;
hx = 0;
hy = 0;
animationx = 0;
animationy = 0;
t = 0;
map = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,4,5,4,5,4,5,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,6,7,6,7,6,7,0,0,0,0,0,0,8,1,1,1,1,1,1,1,1,2,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,10,2,10,2,10,2,10,2,1,1,1,1,8,1,1,1,1,1,1,1,1,2,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,2,10,2,10,2,10,2,10,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
blocks = [];
blocks.push({id:0,x:112,y:32,w:16,h:16});   
blocks.push({id:1,x:128,y:32,w:16,h:16});   
blocks.push({id:2,x:32,y:32,w:16,h:31}); 
blocks.push({id:3,x:64,y:192,w:16,h:16});
blocks.push({id:4,x:127,y:0,w:16,h:16}); 
blocks.push({id:5,x:143,y:0,w:17,h:16});  
blocks.push({id:6,x:128,y:17,w:16,h:16}); 
blocks.push({id:7,x:144,y:17,w:16,h:16}); 
blocks.push({id:8,x:64,y:112,w:8,h:16});
blocks.push({id:9,x:208,y:32,w:31,h:31}); 
blocks.push({id:10,x:192,y:160,w:15,h:15}); 
spritesheet = new Image();
spritesheet.src = "gameboy_outdoor_assets_v1.2.png";
player = new Image();
player.src = "professor_walk_cycle_no_hat.png";
mx = 0;
my = 0;
document.addEventListener("keydown", function(e){
  if(moving == 0){
    if(e.keyCode == 87 && map[pxx-maplength] == 0 || 
       e.keyCode == 87 && map[pxx-maplength] == 3){
      poy += 8;
      animationy = 0;
      moving = 1;
      pxx-=maplength;
      pwalk();
    }
    if(e.keyCode == 65 && map[pxx-1] == 0 || 
       e.keyCode == 65 && map[pxx-1] == 3){
      pox -= 8;
      animationy = 64;
      moving = 1;
      pxx-=1;
      pwalk();      
    }
    if(e.keyCode == 68 && map[pxx+1] == 0 || 
       e.keyCode == 68 && map[pxx+1] == 3){
      pox += 8;
      animationy = 192;
      moving = 1;
      pxx+=1;
      pwalk();
    }
    if(e.keyCode == 83 && map[pxx+maplength] == 0 || 
       e.keyCode == 83 && map[pxx+maplength] == 3){
      poy -= 8;
      animationy = 128;
      moving = 1;
      pxx+=maplength;
      pwalk();
    }
  }
});
ctx.imageSmoothingEnabled = false;
function draw(){
  ctx.clearRect(0,0,1280,720);
  mx = hx;
  my = hy;  
  for(i=0;i<map.length;i++){
  	for(j in blocks){
  	  if(map[i] == blocks[j].id){
  	    ctx.drawImage(spritesheet,blocks[j].x,blocks[j].y,blocks[j].w,blocks[j].h,mx,my,32,32);
  	  }
  	}
  	mx+=32;
    if(mx >= (32*maplength)+hx){
      mx = hx;
      my+=32;
    }
  }
  ctx.drawImage(player,animationx,animationy,64,64,640-10,320-32,64,64);
  if(pox > 0 || poy > 0 || pox < 0 || poy < 0){
    pwalk();
  }
  t+=1;
}

function pwalk(){
  if(poy > 0){
    poy-=1;
    hy+=4;
  }
  if(pox < 0){
    pox+=1;
    hx+=4;
  }
  if(pox > 0){
    pox-=1;
    hx-=4;
  }
  if(poy < 0){
    poy+=1;
    hy-=4;
  }
  animationx+=64;
  if(pox == 0 && poy == 0){
    moving = 0;
    animationx = 0;
  }
}
setInterval(draw,20);