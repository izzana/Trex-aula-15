//criar variáveis de estado do jogo
var play = 1;
var end = 0;
var gameState = play;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
//criar variável score
var score = 0; 



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  //Adicionar obstáculos
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png"); 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.adicionarAnimação("colidiu",trex_colidiu)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  background(180);
  //mostrar pontuação na tela

  //atualizar variável score com a pontuação e arredondar

  //criar if else if para checar os estados do jogo
  if(gameState === play) {

  } else if(gameState === end) {

  }
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar nuvens
  spawnClouds();
  
  //chamar função que gera objetos
  spawObtacles();

  drawSprites();
}

function spawnClouds() {
  //escreva aqui o código para gerar nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(400,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //mostrar profundidade
    console.log("trex: ",trex.depth);
    console.log("Cloud:", cloud.depth);

    //atribua tempo de vida à variável
    cloud.lifetime = 200;

    //ajustar a profundidade
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    }
}

//criar função que gera obstáculos
function spawObtacles() {
  if(frameCount % 60 == 0) {
    var obstacle = createSprite(400, 165, 10, 40);
    obstacle.velocityX = -6;

    //gerar obstáculso aleatórios com switch
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
    //atribuir dimensão e tempo de vida
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
  }
}