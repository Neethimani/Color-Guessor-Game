var noofsquares=6;
var colors=generatecolorrandom(noofsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickran();
var msgdisplay=document.querySelector("#rgb");
var threecode=document.querySelector("#color");
var head=document.querySelector("h1");
var ec=document.querySelector("#reset");
var hard=document.querySelector("#hard");

ec.addEventListener("click",function(){
	ec.classList.add("ec2hd");
	hard.classList.remove("ec2hd");
	noofsquares=3;
	colors=generatecolorrandom(noofsquares);
	msgdisplay.textContent="Reset";
	pickedcolor=pickran();
	threecode.textContent=pickedcolor;
	head.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}

})
hard.addEventListener("click",function(){
	ec.classList.remove("ec2hd");
	hard.classList.add("ec2hd");
	noofsquares=6;
	colors=generatecolorrandom(noofsquares);
	msgdisplay.textContent="Reset";
	head.style.backgroundColor="steelblue";
	pickedcolor=pickran();
	threecode.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
})
threecode.textContent=pickedcolor;
msgdisplay.textContent="Reset";
msgdisplay.addEventListener("click",function(){
	colors=generatecolorrandom(noofsquares);
	msgdisplay.textContent="Reset";
	head.style.backgroundColor="steelblue";
	pickedcolor=pickran();
	threecode.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
})

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
	   var clickedcolor=this.style.backgroundColor;
	   if(pickedcolor === clickedcolor){
	     msgdisplay.textContent="Correct/Reset";
	     changecolor(pickedcolor);
	     head.style.backgroundColor=pickedcolor;
	   }
	   else{
	   	this.style.backgroundColor="#222222";
	   	  msgdisplay.textContent="InCorrect";
	   }
	}
    )
}

function changecolor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickran(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generatecolorrandom(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(sixran());
	}
	return arr;
}
function sixran(){
 var r=Math.floor(Math.random()*256)
 var g=Math.floor(Math.random()*256)
 var b=Math.floor(Math.random()*256)
 var d="rgb("+r+", "+g+", "+b+")";
 	return d;
}
