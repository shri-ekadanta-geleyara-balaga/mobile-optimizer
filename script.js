function analyze(){

let ram=parseFloat(document.getElementById("ram").value);
let total=parseFloat(document.getElementById("totalStorage").value);
let used=parseFloat(document.getElementById("usedStorage").value);

let score=100;

let percent=(used/total)*100;

if(percent>80) score-=30;
if(ram<4) score-=25;

document.getElementById("score").innerHTML=
"Phone Health Score: "+score+"/100";

document.getElementById("storageBar").style.width=
percent+"%";

let tips="";

if(score<50){
tips="Your phone may lag. Delete large files and remove unused apps.";
}
else if(score<80){
tips="Performance average. Try clearing cache.";
}
else{
tips="Your phone performance looks good.";
}

document.getElementById("tips").innerHTML=tips;

drawChart(used,total-used);

}


function virusCheck(){

let ads=document.getElementById("ads").checked;
let battery=document.getElementById("battery").checked;
let apps=document.getElementById("apps").checked;
let heat=document.getElementById("heat").checked;

let count=0;

if(ads) count++;
if(battery) count++;
if(apps) count++;
if(heat) count++;

let result="";

if(count>=3){
result="Possible malware risk.";
}
else if(count==2){
result="Some suspicious symptoms detected.";
}
else{
result="No major virus symptoms detected.";
}

document.getElementById("virusResult").innerHTML=result;

}


function speedTest(){

let speed=Math.floor(Math.random()*80)+20;

document.getElementById("speed").innerHTML=
"Estimated Speed: "+speed+" Mbps";

}


function toggleDark(){
document.body.classList.toggle("dark");
}


function drawChart(used,free){

let canvas=document.getElementById("chart");
let ctx=canvas.getContext("2d");

canvas.width=300;
canvas.height=200;

let total=used+free;
let usedAngle=(used/total)*Math.PI*2;

ctx.clearRect(0,0,300,200);

ctx.beginPath();
ctx.moveTo(150,100);
ctx.arc(150,100,80,0,usedAngle);
ctx.fillStyle="#ff4d4d";
ctx.fill();

ctx.beginPath();
ctx.moveTo(150,100);
ctx.arc(150,100,80,usedAngle,Math.PI*2);
ctx.fillStyle="#4caf50";
ctx.fill();

}
