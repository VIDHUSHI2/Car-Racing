
canvas=document.getElementById('myCanvas');
pink=canvas.getContext("2d");

car1_width=100 ;
car1_height=90;

car2_width=100 ;
car2_height=90;

car1_x=10;
car1_y=10;

car2_x=30;
car2_y=30;

background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_image="https://i.postimg.cc/YqdnnNX1/car1.png";
car2_image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/147354845/original/2842ee6f5d0d210f5168b6a645a1da91b1f4a8f7/create-a-2d-graphic-of-any-car-in-24-hours.jpg";
function add(){
    background_image2=new Image();
    background_image2.onload=uploadbackground;
    background_image2.src=background_image;
   
   car1_image2=new Image();
    car1_image2.onload=uploadcar1;
    car1_image2.src=car1_image;

    car2_image2=new Image();
    car2_image2.onload=uploadcar2;
    car2_image2.src=car2_image;
}

function uploadbackground(){
    pink.drawImage(background_image2,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    pink.drawImage(car1_image2,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    pink.drawImage(car2_image2,car2_x,car2_y,car2_width,car2_height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        right();
        console.log("right");
    }

    if(keypressed=='87'){
        up2();
        console.log("w");
    }
    if(keypressed=='83'){
        down2();
        console.log("s");
    }
    if(keypressed=='65'){
        left2();
        console.log("a");
    }
    if(keypressed=='68'){
        right2();
        console.log("d");
    }
    if(car1_x>700){
        document.getElementById("winner").innerHTML="car1 Has Won!!";
    }

    if(car2_x>700){
        document.getElementById("winner").innerHTML="car2 Has Won!!";
    }
}
function up(){
   if(car1_y>=0){
       car1_y=car1_y-10;
       console.log("x="+car1_x+"y="+car1_y);
       uploadbackground();
       uploadcar1();
   }
}

function up2(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }
 }

function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
 }

 function down2(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }
 }

 function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
 }

 function left2(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }
 }

 function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
 }

 function right2(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        console.log("x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }
 }
