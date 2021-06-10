var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var car1_width=120;
var car1_height=70;
var car1_x=10;
var car1_y=10;
var car1_image="car1.png";

var car2_image="car2.png"
var car2_width=120;
var car2_height=70;
var car2_x=10;
var car2_y=100;
var car2_image="car2.png";

var bgpic=["bg.jpg", "bg1.jpg"];
var random_number= Math.floor(Math.random()*2);
var background_image=bgpic[random_number];

function add(){
 bgimg=new Image();
 bgimg.onload=uploadbackground;
 bgimg.src=background_image;

 car1_img= new Image();
 car1_img.onload=uploadcar1;
 car1_img.src=car1_image;

 car2_img= new Image();
 car2_img.onload=uploadcar2;
 car2_img.src=car2_image;
}
function uploadbackground(){
ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);
    }

function uploadcar2(){
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);
    }
window.addEventListener("keydown", mykeydown);

function mykeydown(e){
     var keypressed=e.keyCode;
     console.log(keypressed);
    if(keypressed=="65"){
        console.log("a key");
        car1_left();
    }
    if(keypressed=="87"){
        console.log("w key");
        car1_up();
    }
    if(keypressed=="68"){
        console.log("d key");
        car1_right();
    }
    if(keypressed=="83"){
        console.log("s key");
        car1_down();

    }
    if(keypressed=="40"){
        console.log("down arrow key");
        car2_down();

    }
    if(keypressed=="38"){
        console.log("up arrow key");
        car2_up();

    }
    if(keypressed=="39"){
        console.log("right arrow key");
        car2_right();

    }
    if(keypressed=="37"){
        console.log("left arrow key");
        car2_left();

    }
}



