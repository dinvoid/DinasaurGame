let container=document.querySelector("#container");
let dino=document.querySelector("#dino");
let bird=document.querySelector("#bird");
let cloud=document.querySelector("#cloud");
let road=document.querySelector("#road");
let block=document.querySelector("#block");
let score=document.querySelector("#score");
let gameover=document.querySelector("#game-over");
let restart=document.querySelector("#restart");
let playy=document.querySelector("#play");

let interval=null;
let playerScore=0;
let isPaused=false;
let scoreCounter=()=>{
	if(!isPaused)
	playerScore++;
	score.innerHTML=`Score:<b>${+playerScore}</b>`;

}

/*
// i comment this because i dont want the user click the space ,  i want tehm used the
 play button
window.addEventListener("keydown",(start)=>{
//	console.log(start);
	if(start.code=="Space")
	{
		gameover.style.display="none";
		restart.style.display="none";
		block.classList.add("blockActive");
		road.classList.add("roadActive");
		bird.classList.add("birdActive");
		cloud.firstElementChild.style.animation="animateCloud 10s linear infinite";
	    playerScore=0;
	    interval=setInterval(scoreCounter,200)

	}
});

*/

//jump the character

window.addEventListener("keydown",(e)=>
{
	 //console.log(e);
	if(e.key=="ArrowUp")
	
		if(dino.classList !="dinoActive")
		{
			playaudio();
			dino.classList.add("dinoActive");
           
			//remove the dinoactive after ,0.5 seconds
			setTimeout(() => {
             dino.classList.remove("dinoActive");
             }, 500); 
		}
});

//game over if the character is hit by the block
//collision
let result=setInterval(()=>{
	 let dinobottom=parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
	  //console.log("dinobottom"+dinobottom)
	 let blockleft=parseInt(getComputedStyle(block).getPropertyValue("left"));
	  //console.log("blockLeft"+blockleft);
	 if(dinobottom <=90  && blockleft>=20 && blockleft<=120){
	 	//console.log('gamr oveer')
	 	die();
	 	gameover.style.display="flex";
	 	restart.style.display="flex";
	 	block.classList.remove("blockActive");
		road.classList.remove("roadActive");
		bird.classList.remove("birdActive");
		cloud.firstElementChild.style.animation="none";

        isPaused=true;
	 }
},10);

//restart
 function restartme(){
        gameover.style.display="none";
		restart.style.display="none";
		block.classList.add("blockActive");
		road.classList.add("roadActive");
		bird.classList.add("birdActive");
		cloud.firstElementChild.style.animation="animateCloud 10s linear infinite";
	    
	    playerScore=0;
	    interval=setInterval(scoreCounter,200)
	

}
function playme(){
	
	    play.style.display="none";
	    gameover.style.display="none";
	 	restart.style.display="none";
		block.classList.add("blockActive");
		road.classList.add("roadActive");
		bird.classList.add("birdActive");
		cloud.firstElementChild.style.animation="animateCloud 10s linear infinite";
	    playerScore=0;
	    interval=setInterval(scoreCounter,200)
}

function playaudio(){
var audio = new Audio(src="assets/jump.wav");
audio.play();
}
function die(){
var audio = new Audio(src="assets/die.wav");
audio.play();	
}