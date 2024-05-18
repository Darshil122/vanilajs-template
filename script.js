let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".b");

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