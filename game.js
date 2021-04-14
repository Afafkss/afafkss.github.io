document.getElementById("canvas");
var ctx = canvas.getContext("2d");

x = 32;
y = 32;
mx = 0;
my = 0;
up = 0;
left = 0;
right = 0;
down = 0;
moving = 0;
pox = 0;
poy = 0;
pxx = 21;
maplength = 20;
t = 0;
map = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
blocks = [];

for(i=0;i<map.length;i++){
  if(map[i] == 1){
    blocks.push({x:mx,y:my});
  }
  mx+=32;
  if(mx >= 32*5){
  	mx = 0;
    my+=32;
  }
}
mx = 0;
my = 0;
document.addEventListener("keydown", function(e){
  if(moving == 0){
    if(e.keyCode == 87 && map[pxx-maplength] != 1){
      poy += 8;
      moving = 1;
      pxx-=maplength;
      pwalk();
    }
    if(e.keyCode == 65 && map[pxx-1] != 1){
      pox -= 8;
      moving = 1;
      pxx-=1;
      pwalk();      
    }
    if(e.keyCode == 68 && map[pxx+1] != 1){
      pox += 8;
      moving = 1;
      pxx+=1;
      pwalk();
    }
    if(e.keyCode == 83 && map[pxx+maplength] != 1){
      poy -= 8;
      moving = 1;
      pxx+=maplength;
      pwalk();
    }
  }
});

function draw(){
  ctx.clearRect(0,0,1280,720);
  mx = 0;
  my = 0;
  for(i=0;i<map.length;i++){
  	if(map[i] == 0){
  	  ctx.fillStyle = "green";
  	}
  	if(map[i] == 1){
  	  ctx.fillStyle = "black";
  	}
  	ctx.fillRect(mx,my,32,32);
    mx+=32;
    if(mx >= 32*maplength){
      mx = 0;
      my+=32;
    }
  }
  ctx.fillStyle = "red";
  ctx.fillRect(x,y,32,32);
  if(pox > 0 || poy > 0 || pox < 0 || poy < 0){
    pwalk();
  }
  t+=1;
}

function pwalk(){
  if(poy > 0){
  	y-=4;
    poy-=1;
  }
  if(pox < 0){
    x-=4;
    pox+=1;
  }
  if(pox > 0){
  	x+=4;
    pox-=1;
  }
  if(poy < 0){
    y+=4;
    poy+=1;
  }
  if(pox == 0 && poy == 0){
    moving = 0;
  }
}
setInterval(draw,20);