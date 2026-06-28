const date = localStorage.getItem("date");
const time = localStorage.getItem("time");
const arr = date.split("-");
const newDate =
arr[2] + "/" +
arr[1] + "/" +
arr[0];
document
.getElementById("date")
.innerHTML = newDate;
document
.getElementById("time")
.innerHTML= time;
if(place==null){
    window.location="index.html";
}
localStorage.removeItem("date");
localStorage.removeItem("time");