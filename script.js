var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
   hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;
}
function makebubbble(){
    var bubble = ''
    
    for(i=0; i<=299; i++){
        var rn = Math.floor(Math.random()*10)
        bubble += `   <div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bubble;
}
function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Well Played, Game Over</h1>`;
        }
    }, 1000);
    
}
document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickthenumber = Number(dets.target.textContent);
    if(clickthenumber === hitrn){
        increaseScore();
        makebubbble();
        getNewHit();
    }
})
getNewHit()
runTimer();
makebubbble();
