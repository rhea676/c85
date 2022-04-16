var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var marsimages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
var randomNumber = Math.floor(Math.random()*4);

roverWidth = 100;
roverHeight= 80;
backgroundImage=marsimages[randomNumber];
roverImage="rover.png";
roverX=400;
roverY=400;

function add()
{
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundImage;
    
    roverImgTag=new Image();
    roverImgTag.onload=uploadRover;
    roverImgTag.src=roverImage;

}

function uploadBackground(){
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImgTag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")                          //"=="is used for comparing
{
    up();
    console.log("up");
}

if(keyPressed=="40")                         
{
    down();
    console.log("down");
}

if(keyPressed=="37")                         
{
    left();
    console.log("left");
}

if(keyPressed=="39")                         
{
    right();
    console.log("right");
}

}

function up(){
    if(roverY>=0){
        roverY= roverY-10;
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(roverY<400){
        roverY = roverY+10;
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(roverX>=0){
        roverX = roverX-10;
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(roverX<700){
        roverX = roverX+10;
        uploadBackground();
        uploadRover();
    }
}
