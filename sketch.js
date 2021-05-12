var canvas
var door1,door1Img,door2,door2Img;
var button, mainScreen;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15;
var diamond1,diamond2,diamond3,diamond4,diamond5,diamond6,dImg;
var dracula1,dracul2,dracula3,dracula1Img,dracula2Img;
var player,pImg;
var gameState="play", score=0;
var sound

function preload(){
door1Img=loadImage("door.jpg");
door2Img=loadImage("open-door.png");
dImg=loadImage("diamond.png");
dracula1Img=loadImage("dracula.png");
dracula2Img=loadImage("dracula1.png");
pImg=loadAnimation("player2.png");
sound=loadSound("peritune-spook4.mp3")

}


function setup(){
canvas=createCanvas(700,500);

sound.loop();

door1=createSprite(350,250,700,500);
door1.addImage(door1Img);

door2=createSprite(350,250,700,500);
door2.addImage(door2Img);
door2.visible=false;

button=createSprite(600,50,120,40);
button.shapeColor="white";
button.visible=false;

mainScreen=createSprite(350,250,700,500);
mainScreen.shapeColor="grey";
mainScreen.visible=false;

w1=createSprite(2,250,4,700);
w1.shapeColor=0;
w1.visible=false;

w2=createSprite(698,250,4,700);
w2.shapeColor=0;
w2.visible=false;

w3=createSprite(200,498,400,4);
w3.shapeColor=0;
w3.visible=false;

w4=createSprite(590,498,260,4);
w4.shapeColor=0;
w4.visible=false;

w5=createSprite(200,2,400,4);
w5.shapeColor=0;
w5.visible=false;

w6=createSprite(590,2,260,4);
w6.shapeColor=0;
w6.visible=false;

w7=createSprite(70,250,150,4);
w7.shapeColor=0;
w7.visible=false;

w8=createSprite(310,250,200,4);
w8.shapeColor=0;
w8.visible=false;

w9=createSprite(500,250,270,4);
w9.shapeColor=0;
w9.visible=false;

w10=createSprite(232,150,4,300);
w10.shapeColor=0;
w10.visible=false;

w11=createSprite(232,455,4,150);
w11.shapeColor=0;
w11.visible=false;

w12=createSprite(475,65,4,150);
w12.shapeColor=0;
w12.visible=false;

w13=createSprite(475,260,4,90);
w13.shapeColor=0;
w13.visible=false;

w14=createSprite(475,450,4,120);
w14.shapeColor=0;
w14.visible=false;

diamond1=createSprite(30,30);
diamond1.addImage(dImg);
diamond1.visible=false;
diamond1.scale=0.2;

diamond2=createSprite(670,30);
diamond2.addImage(dImg);
diamond2.visible=false;
diamond2.scale=0.2;

diamond3=createSprite(30,470);
diamond3.addImage(dImg);
diamond3.visible=false;
diamond3.scale=0.2;

diamond4=createSprite(670,470);
diamond4.addImage(dImg);
diamond4.visible=false;
diamond4.scale=0.2;

diamond5=createSprite(270,30);
diamond5.addImage(dImg);
diamond5.visible=false;
diamond5.scale=0.2;

diamond6=createSprite(270,470);
diamond6.addImage(dImg);
diamond6.visible=false;
diamond6.scale=0.2;

dracula1=createSprite(100,100);
dracula1.addImage(dracula1Img);
dracula1.visible=false;
dracula1.scale=0.18;
dracula1.velocityX=3;
dracula1.velocityY=4;

dracula2=createSprite(650,400);
dracula2.addImage(dracula2Img);
dracula2.visible=false;
dracula2.scale=0.18;
dracula2.velocityX=3;
dracula2.velocityY=4;

dracula3=createSprite(500,100);
dracula3.addImage(dracula1Img);
dracula3.visible=false;
dracula3.scale=0.18;
dracula3.velocityX=3;
dracula3.velocityY=4;

player=createSprite(420,450);
player.addAnimation("player running", pImg);
player.scale=0.18;
player.visible=false;


}


function draw(){
background("brown");

if(gameState==="play"){

//fill("red")
//line (560,478,590,498);

    if(keyDown("down")){
        player.y=player.y+5;
    }

    if(keyDown("up")){
        player.y=player.y-5;
    }

    if(keyDown("left")){
        player.x=player.x-5;
    }

    if(keyDown("right")){
        player.x=player.x+5;
    }

    if(dracula2.y>490 || dracula2.y<10){
        dracula2.x=350;
        dracula2.y=400;
    }

    if(dracula3.y>490 || dracula3.y<10){
        dracula3.x=500;
        dracula3.y=100;
    }


    if(mousePressedOver(door1)){
        door1.visible=false;
        door2.visible=true;
        button.visible=true;  
        
    }

    if(mousePressedOver(button)){
        door1.visible=false;
        door2.visible=false; 
        mainScreen.visible=true;
        button.visible=false;


    
    }
    if(keyDown("space")){
        w1.visible=true;
        w2.visible=true;
        w3.visible=true;
        w4.visible=true;
        w5.visible=true;
        w6.visible=true;
        w7.visible=true;
        w8.visible=true;
        w9.visible=true;
        w10.visible=true;
        w11.visible=true;
        w12.visible=true;
        w13.visible=true;
        w14.visible=true;
        diamond1.visible=true;
        diamond2.visible=true;
        diamond3.visible=true;
        diamond4.visible=true;
        diamond5.visible=true;
        diamond6.visible=true;
        dracula1.visible=true;
        dracula2.visible=true;
        dracula3.visible=true;
        player.visible=true;
        }


    dracula1.bounceOff(w1);
    dracula1.bounceOff(w2);
    dracula1.bounceOff(w3);
    dracula1.bounceOff(w4);
    dracula1.bounceOff(w5);
    dracula1.bounceOff(w6);
    dracula1.bounceOff(w7);
    dracula1.bounceOff(w8);
    dracula1.bounceOff(w9);
    dracula1.bounceOff(w10);
    dracula1.bounceOff(w11);
    dracula1.bounceOff(w12);
    dracula1.bounceOff(w13);
    dracula1.bounceOff(w14);

    dracula2.bounceOff(w1);
    dracula2.bounceOff(w2);
    dracula2.bounceOff(w3);
    dracula2.bounceOff(w4);
    dracula2.bounceOff(w5);
    dracula2.bounceOff(w6);
    dracula2.bounceOff(w7);
    dracula2.bounceOff(w8);
    dracula2.bounceOff(w9);
    dracula2.bounceOff(w10);
    dracula2.bounceOff(w11);
    dracula2.bounceOff(w12);
    dracula2.bounceOff(w13);
    dracula2.bounceOff(w14);

    dracula3.bounceOff(w1);
    dracula3.bounceOff(w2);
    dracula3.bounceOff(w3);
    dracula3.bounceOff(w4);
    dracula3.bounceOff(w5);
    dracula3.bounceOff(w6);
    dracula3.bounceOff(w7);
    dracula3.bounceOff(w8);
    dracula3.bounceOff(w9);
    dracula3.bounceOff(w10);
    dracula3.bounceOff(w11);
    dracula3.bounceOff(w12);
    dracula3.bounceOff(w13);
    dracula3.bounceOff(w14);

    player.bounceOff(w1);
    player.bounceOff(w2);
    player.bounceOff(w3);
    player.bounceOff(w4);
    player.bounceOff(w5);
    player.bounceOff(w6);
    player.bounceOff(w7);
    player.bounceOff(w8);
    player.bounceOff(w9);
    player.bounceOff(w10);
    player.bounceOff(w11);
    player.bounceOff(w12);
    player.bounceOff(w13);
    player.bounceOff(w14);

        if(player.isTouching(diamond1)){
            score+=100;
            //diamond1.visible=false
            diamond1.x=800;
        }

        if(player.isTouching(diamond2)){
            score+=100;
            //diamond2.visible=false
            diamond2.x=800;
        }

        if(player.isTouching(diamond3)){
            score+=100;
            //diamond3.visible=false
            diamond3.x=800;
        }

        if(player.isTouching(diamond4)){
            score+=100;
           // diamond4.visible=false
            diamond4.x=800;
        }

        if(player.isTouching(diamond5)){
            score+=100;
           // diamond5.visible=false
            diamond5.x=800;
        }

        if(player.isTouching(diamond6)){
            score+=100
           // diamond6.visible=false
            diamond6.x=800;
        }

    if(player.isTouching(dracula1) || player.isTouching(dracula2) || player.isTouching(dracula3)){
        gameState="end";
    }


}

drawSprites();

    if(door1.visible===true){
        textSize(35);
        fill(225);
        text("Draculas & Diamonds",200,115);
    }

    if(diamond1.x===800 && diamond2.x===800 && diamond3.x===800 && diamond4.x===800 && diamond5.x===800 && diamond6.x===800){
        textSize(35);
        fill(0);
        text("You Win!",250,155);

    }

    if(keyDown("r") && gameState==="end"){
       
        reset ();
    }
    

if(gameState==="end"){
    dracula1.velocityX=0;
    dracula1.velocityY=0;

    dracula2.velocityX=0;
    dracula2.velocityY=0;

    dracula3.velocityX=0;
    dracula3.velocityY=0;

    sound.stop();

    textSize(35);
    fill (0);
    text("GAME OVER",250,155);

    textSize(30);
    fill (0);
    text("Press 'R' to Reset.",240,350);
}

if(button.visible===true){
textSize(25);
fill (0);
text("Top View",550,55);
}



if(mainScreen.visible===true && dracula1.visible===false){
textSize(25);
fill (0);
text("Press Space to Start",220,55);
text("Use Arrow Keys to Play",200,95);
}

if(dracula1.visible===true){
    textSize(25);
    fill (0);
    text("Score : "+ score,500,35);
}

}

function reset(){
    gameState="play";
    player.x=420;
    player.y=450;
    score=0;
    dracula1.velocityX=3;
    dracula1.velocityY=4;
    dracula2.velocityX=3;
    dracula2.velocityY=4;
    dracula3.velocityX=3;
    dracula3.velocityY=4;
    dracula1.x=100;
    dracula1.y=100;
    dracula2.x=650;
    dracula2.y=400;
    dracula3.x=500;
    dracula3.y=100;

    diamond1.x=30;
    diamond2.x=670;
    diamond3.x=30;
    diamond4.x=670;
    diamond5.x=270;
    diamond6.x=270;

    sound.loop();
}