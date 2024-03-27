var countDownDate = new Date("feb 12 2024 00:00:00").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector(".days").innerText = days;            
    document.querySelector(".hours").innerText = hours;        
    document.querySelector(".minutes").innerText = minutes;        
    document.querySelector(".seconds").innerText = seconds;            




}, 1000);