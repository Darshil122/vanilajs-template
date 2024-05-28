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

const home = document.querySelector("#home");
const counter = document.querySelector("#counter");
const showModal = document.querySelector("#showModal");
const googleReview = document.querySelector("#review");
const table = document.querySelector("#table");
const form = document.querySelector("#form");

const showCounter = document.getElementById("showCounter");
const mymodal = document.getElementById("box");
const showReview = document.getElementById("showReview");
const showHome = document.getElementById("showHome");
const showTable = document.getElementById("showTable");
const showForm = document.getElementById("showForm");

function hideAllExcept(section) {
    [showHome, showCounter, mymodal, showReview, showTable, showForm].forEach((element) => {
        if (element !== section) {
            element.style.display = "none";
        }
    });
}

home.addEventListener("click", function() {
    showHome.style.display = "block";
    hideAllExcept(showHome);
});

counter.addEventListener("click", function() {
    showCounter.style.display = "block";
    hideAllExcept(showCounter);
});

showModal.addEventListener("click", function() {
    mymodal.style.display = "block";
    hideAllExcept(mymodal);
});

googleReview.addEventListener("click", function() {
    showReview.style.display = "block";
    hideAllExcept(showReview);
});

table.addEventListener('click', function(){
    showTable.style.display = "block";
    hideAllExcept(showTable);
});

form.addEventListener('click', function(){
    showForm.style.display = "block";
    hideAllExcept(showForm);
});

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


let selectedrow = null;
function onFormSubmit(){
    event.preventDefault();
    let formData = readFormData();
    if(selectedrow === null){
        insertNewRecord(formData);
    }else{
            updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    let formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;

    let radioButtons = document.getElementsByName("gender");
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            formData["gender"] = radioButtons[i].value;
            break;
        }
    }
    formData["number"] = document.getElementById("number").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

function insertNewRecord(data){
    let table = document.getElementById("stdDetail").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    let row1 = newRow.insertCell(0);
        row1.innerHTML = data.fname;
    let row2 = newRow.insertCell(1);
        row2.innerHTML = data.lname;
    let row3 = newRow.insertCell(2);
        row3.innerHTML = data.gender;
    let row4 = newRow.insertCell(3);
        row4.innerHTML = data.number;
    let row5 = newRow.insertCell(4);
        row5.innerHTML = data.email;
    let row6 = newRow.insertCell(5);
        row6.innerHTML = '<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>';
}

function onEdit(td){
    selectedrow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedrow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedrow.cells[1].innerHTML;
    radioButtons[i].value = selectedrow.cells[2].innerHTML;
    document.getElementById("number").value = selectedrow.cells[3].innerHTML;
    document.getElementById("email").value = selectedrow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedrow.cells[0].innerHTML = formData.fname;
    selectedrow.cells[1].innerHTML = formData.lname;
    selectedrow.cells[2].innerHTML = formData.gender;
    selectedrow.cells[3].innerHTML = formData.number;
    selectedrow.cells[4].innerHTML = formData.email;

}

function onDelete(td){
    if(confirm("Do You Want to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("stdDetail").deleteRow(row.rowIndex);
    }
    resetForm();
}

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementsByName("gender").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";

}