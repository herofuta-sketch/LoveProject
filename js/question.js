const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
yesBtn.addEventListener("click",function(){
    window.location="date.html";
});
noBtn.addEventListener("mouseover",moveButton);
function moveButton(){
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
