var width=screen.width;
var x1,y1,x2,y2;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
if(width<800){
canvas.width=width-70;
canvas.height=height-300;
document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
x2=e.touches[0].clientX-canvas.offsetLeft;
y2=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
x1=e.touches[0].clientX-canvas.offsetLeft;
y1=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.moveTo(x2,y2);
ctx.lineTo(x1,y1);
ctx.stroke();
x2=x1;
y2=y1
}