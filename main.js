function preload(){

}
function setup(){
canvas=createCanvas(640,500);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tintcolor="";

}
function draw(){
image(video,230,150,220,200);
fill ("red");
stroke ("red");
circle (50,50,80);
circle (50,430,80);
circle (590,50,80);
circle (590,430,80);
fill("green");
stroke ("green");
rect(90,40,460,20);
rect(90,420,460,20);
rect(580,90,20,300);
rect(40,90,20,300);
tint(tintcolor);
}
function take_snapshot(){
save('photo.png');

}
function applyfilter(){
tintcolor=document.getElementById("colorname").value ;
}
 
