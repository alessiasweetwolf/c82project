canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var lastX,lastY;
color="black";
width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseevent="mousedown";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_x=e.clientX -canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;
console.log(current_x,current_y);
    if (mouseevent == "mousedown"){
        console.log("draw");    
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth= 2;
ctx.arc(current_x,current_y,40,0,2*Math.PI);
        
        ctx.stroke();
    }
}