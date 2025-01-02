let gameSeq = [];
let userSeq = [];

let btns = ["yellow" ,"red" , "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    };
});


function gameFlesh(btn) {
    btn.classList.add("flesh");
    setTimeout(function () {
        btn.classList.remove("flesh");
    },100);
}
function userFlesh(btn) {
    btn.classList.add("userFlesh");
    setTimeout(function () {
        btn.classList.remove("userFlesh");
    },100);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let  randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlesh(randBtn);
   
    

}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 500);
        }        
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level} level </b> <br> Press any key to restart `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}
function btnPress() {
    // console.log(this);
    let btn =  this;
    userFlesh(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns  =  document.querySelectorAll(".btn");

for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started= false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}