
var randno = Math.round(Math.random()*100);

var  live=document.getElementById("rlive");

var messge=document.getElementById("message");

console.log(randno);


var msg="";

var lives=5;

var mg="";
var liv=5;


function firstpage()
{
    location.href="./firstpage.html";
}

function res()
{

    lives--;
    var input=document.getElementById("txt").value;
    console.log(input);


    if (input == randno)
    {
        location.href="./win.html";
    }
    else if((input > randno)&&(lives != 0))
    {
        console.log(input,randno);
        msg="YOUR GUESS IS HIGH";
    }
    else if((input < randno)&&(lives!= 0))
    {
        console.log(input,randno);
        msg="YOUR GUESS IS LOW";
    }
    else if(lives == 0)
    {
        location.href="./lose.html";
    }
messge.innerHTML=msg;
live.innerHTML="Remaining Lives:"+lives;
}
function reset()
{
    document.getElementById("txt").value="";
    
    document.getElementById("message").innerHTML="";
}

function re()
{
    lives=5;
    msg="";
    document.getElementById("txt").value="";
    live.innerHTML="Remaining Lives:"+lives;
    document.getElementById("message").innerHTML="";
}