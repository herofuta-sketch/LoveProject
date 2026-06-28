const text = 
`Hello...
I wanna talk to you that I really like to go out with you. 
Will we go out together again? 
I hope you like it too!`;
const typing = document.getElementById("typing");
let index = 0;
function typeWriter(){
    if(index < text.length){
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter,50);
    }
}
typeWriter();
function createHeart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(15+Math.random()*30)+"px";
    heart.style.animationDuration=(4+Math.random()*4)+"s";
    document.body.appendChild(heart);
    setTimeout(function(){
        heart.remove();
    },8000);
}
setInterval(createHeart,250);
const startBtn = 
document.getElementById("startBtn");
const music = 
document.getElementById("bgMusic");
startBtn.addEventListener(
    "click",
    function(){
        music.play();
        document
        .querySelector(".container")
        .classList
        .add("fadeOut");
        setTimeout(function(){
            window.location="question.html";
        },800);
    }
);