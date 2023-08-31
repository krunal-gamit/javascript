let timer = 60;
let hitVal;
let score = 0;
let flagValue = 0;

function makeBubbles(){
    let bubbleCount = "";
    for (let i=0; i<184; i++){
        let randNum = Math.floor(Math.random()*10);
        bubbleCount += `<div class="bubble">${randNum}</div>`;
    }

    document.querySelector('#bottomBar').innerHTML = bubbleCount;
}

function clearBubbles(){
    document.querySelector('#bottomBar').innerHTML = "";
}

function runTimer(){
   let clearTimer = setInterval(function(){
       if(timer>0){
        timer--;
        document.querySelector("#timerVal").innerHTML = timer;
       }
       else{
        document.querySelector("#bottomBar").innerHTML = `<div class="dynamic"><h1>Game Over</h1><h2>Your Score: ${score}</h2></div>`;
        flagCheck(1);
        clearInterval(clearTimer);
       }
    },1000);
}

function hitUpdate(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitVal;
}

function updateScore(){
    score = Number(document.querySelector("#scoreVal").textContent);
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#bottomBar")
.addEventListener("click",function(det){
    let clickVal = Number(det.target.textContent);
    if(clickVal === hitVal){
        updateScore();
        hitUpdate();
        makeBubbles();
    }
})

function start(){
hitUpdate();
makeBubbles();
runTimer();
}

function flagCheck(fv){
    console.log("hi");
    if (fv === 0){
        console.log("hi");
        document.querySelector("#btn").textContent = "Retry";
        document.querySelector("#mainMenu").style.display = "none";
    }
    else{
        document.querySelector("#mainMenu").style.display = "block";
        score = 0;
        document.querySelector("#scoreVal").textContent = score;
        document.querySelector("#hitVal").textContent = 0;
        timer = 60;
        document.querySelector("#timerVal").textContent = timer;

    }
}

document.querySelector("#mainMenu").
addEventListener("click", function(){
    flagCheck(flagValue);
    start();
})



