
var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.scrollY > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})



window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.header');
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = '#175d69'; // Change to desired color
    } else {
      navbar.style.backgroundColor = ''; // Reset to initial color
    }
  });