canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
nasa_images_array = ["nasa_image_0.jpeg", "nasa_image_1.jpeg", "nasa_image_2.jpeg", "nasa_image_3.jpg"];
random_number = Math.floor (Math.random()* 4);
rover_x = 10;
rover_y = 10;
rover_height = 100;
rover_width = 90;
background_img = nasa_images_array[random_number];
console.log(random_number);
rover_img = "rover.png";
function add(){
    background_imgnew = new Image();
    background_imgnew.onload = uploadbackground;
    background_imgnew.src = background_img;
    rover_imgnew = new Image();
    rover_imgnew.onload = uploadrover;
    rover_imgnew.src = rover_img;
    
}
function uploadbackground(){
    ctx.drawImage(background_imgnew, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgnew, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed=="38"){
        up();
        console.log("up");
    }
    if (keypressed=="37"){
        left();
        console.log("left");
    }
    if (keypressed=="40"){
        down();
        console.log("down");
    }
    if (keypressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log(rover_x + ", "+ rover_y);
        uploadbackground();
        uploadrover();

    }
    
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log(rover_x + ", "+ rover_y);
        uploadbackground();
        uploadrover();
        
    }
    
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log(rover_x + ", "+ rover_y);
        uploadbackground();
        uploadrover();
        
    }
    
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log(rover_x + ", "+ rover_y);
        uploadbackground();
        uploadrover();
        
    }
    
}