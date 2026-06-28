const confirmBtn = document.getElementById("confirmBtn");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
confirmBtn.addEventListener("click",function(){
    const date=dateInput.value;
    const time=timeInput.value;
    if(date===""||time===""){
        alert("Hãy chọn đầy đủ ngày và giờ nhé!");
        return;
    }
    localStorage.setItem("date",date);
    localStorage.setItem("time",time);
    window.location="success.html";
});