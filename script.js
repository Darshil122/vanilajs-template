let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".b");
const toggle = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-menu');

let home = document.getElementById("home");
let counter = document.getElementById("counter");
let modal = document.getElementById("modal");
let review = document.getElementById("review");
let showCounter = document.getElementById("showCounter");

counter.onclick = function(){
    showCounter.style.display = "block";
}
home.onclick = function(){
    showCounter.style.display = "none";
}
modal.onclick = function(){
    showCounter.style.display = "none";
}
review.onclick = function(){
    showCounter.style.display = "none";
}
toggle.addEventListener('click', () => {
navMenu.classList.toggle('hide');
});

btns.forEach(function (btn){
    btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if(style.contains("decrease")){
        count--;
    }else if(style.contains("increase")){
        count++;
    }else{
        count = 0;
    }

    if(count > 0){
        value.style.color = "green";
    }else if(count < 0){
        value.style.color = "red";
    }else{
        value.style.color = "black";
    }
    value.textContent = count;
    });
});