let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".b");
const toggle = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-menu');

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementById("close");

let home = document.getElementById("home");
let counter = document.getElementById("counter");
let showModal = document.getElementById("showModal");
let review = document.getElementById("review");

let showCounter = document.getElementById("showCounter");
let mymodal = document.getElementById("box");

counter.onclick = function(){
    mymodal.style.display = "none";
    showCounter.style.display = "block";
}
home.onclick = function(){
    showCounter.style.display = "none";
}
showModal.onclick = function(){
    showCounter.style.display = "none";
    mymodal.style.display = "block";
}
review.onclick = function(){
    showCounter.style.display = "none";
    mymodal.style.display = "none";

}

toggle.addEventListener('click', () => {
navMenu.classList.toggle('hide');
});

//counter
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

//Modal
btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}