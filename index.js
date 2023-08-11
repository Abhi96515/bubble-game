var timer=60
var hitrun=0
var score=0

function makeBubble(){
    let clutter=''

    for(let i=0 ;i<=120;i++){
        rn= Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector('#pbtn').innerHTML=clutter
}

function timmerChange(){
  var setTimeinit = setInterval(() => {
    if(timer>0){
        --timer
    document.querySelector('#Time').textContent=timer
    }else{
        clearInterval(setTimeinit)
        document.querySelector('#pbtn').innerHTML=`<h1>Game Over</h1>`
    }
  }, 1000);
}

function increaseScore(){
    score += 10;
   document.querySelector('#score').innerHTML= score
}

function changeHit(){
     hitrun=Math.floor(Math.random()*10)
    document.querySelector('#hit').textContent=hitrun
}

document.querySelector('#pbtn').addEventListener("click",function(num){
     console.log(Number(num.target.textContent))
    var clickednum = Number(num.target.textContent);
    if(clickednum===hitrun){
        increaseScore()
        makeBubble()
        changeHit()
    }
})



changeHit()
timmerChange()
makeBubble()