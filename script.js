let currentItem = 0;

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".b");

const toggle = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-menu');


let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementById("close");

let home = document.querySelector("#home");
let counter = document.querySelector("#counter");
let showModal = document.querySelector("#showModal");
let googleReview = document.querySelector("#review");
// let table = document.querySelector("#table");

let showCounter = document.getElementById("showCounter");
let mymodal = document.getElementById("box");
let showReview = document.getElementById("showReview");
let showHome = document.getElementById("showHome");
// let showtable = document.getElementById("showTable");

home.onclick = function(){
    showHome.style.display = "block";
    showCounter.style.display = "none";
    mymodal.style.display = "none";
    showReview.style.display = "none";
    // showtable.style.display = "none";
}
counter.onclick = function(){
    showCounter.style.display = "block";
    showHome.style.display = "none";
    mymodal.style.display = "none";
    showReview.style.display = "none";
    // showtable.style.display = "none";
}
showModal.onclick = function(){
    mymodal.style.display = "block";
    showHome.style.display = "none";
    showCounter.style.display = "none";
    showReview.style.display = "none";
    // showtable.style.display = "none";
}
googleReview.onclick = function(){
    showReview.style.display = "block";
    showHome.style.display = "none";
    showCounter.style.display = "none";
    mymodal.style.display = "none";
    // showtable.style.display = "none";
}
// table.onclick = function(){
//     showHome.style.display = "none";
//     showCounter.style.display = "none";
//     mymodal.style.display = "none";
//     showReview.style.display = "none";
//     showtable.style.display = "block";
// }


let menu = document.querySelectorAll(".menu");

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
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


// Review
const review = [{
    id: 1, 
    name: "john Doe", 
    job: "Devloper", 
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi vel doloribus quasi dolor quamasperioresmolestiae officia neque.Ipsa ducimus veritatis hic at necessitatibus maxime amet laboriosam, dolor minus,atque placeat.Velit facilis doloremque hic recusandae." 
},
{
    id: 2,
    name: "Alice Doe", 
    job: "Designer",
    img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi vel doloribus quasi dolor quamasperioresmolestiae officia neque.Ipsa ducimus veritatis hic at necessitatibus maxime amet laboriosam, dolor minus,atque placeat.Velit facilis doloremque hic recusandae."
},
{
    id: 3,
    name: "Smith Doe",
    job: "UI/UX",
    img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi vel doloribus quasi dolor quamasperioresmolestiae officia neque.Ipsa ducimus veritatis hic at necessitatibus maxime amet laboriosam, dolor minus,atque placeat.Velit facilis doloremque hic recusandae."
}];


window.addEventListener("DOMContentLoaded", function(){
    showperson[currentItem];
});

function showperson(person){
    const item = review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showperson();
});

preBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = review.length - 1;
    }
    showperson();
});
