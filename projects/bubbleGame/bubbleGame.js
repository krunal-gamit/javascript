let timer = 60;
let hitVal;
let score = 0;
let flagValue = 0;

//a function to make bubbles when it starts and refresh required
function makeBubbles(){
    let bubbleCount = "";
    for (let i=0; i<184; i++){
        let randNum = Math.floor(Math.random()*10);
        bubbleCount += `<div class="bubble">${randNum}</div>`;
    }

    document.querySelector('#bottomBar').innerHTML = bubbleCount;
}

//erasing the bubbles 
function clearBubbles(){
    document.querySelector('#bottomBar').innerHTML = "";
}

//starting the timer when the start button is clicked
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

//a function to update the hit value
function hitUpdate(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitVal;
}

//this function updates the score 
function updateScore(){
    score = Number(document.querySelector("#scoreVal").textContent);
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

//event listener whenever there is a click which triggers to check if the clicked value is equal to the hit value
document.querySelector("#bottomBar")
.addEventListener("click",function(det){
    let clickVal = Number(det.target.textContent);
    if(clickVal === hitVal){
        updateScore();
        hitUpdate();
        makeBubbles();
    }
})

//this function runs when start button is clicked
function start(){
hitUpdate();
makeBubbles();
runTimer();
}

//checking the flag value, and resetting the values and adding the button retry
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

//getting the click event on start button
document.querySelector("#mainMenu").
addEventListener("click", function(){
    flagCheck(flagValue);
    start();
})



