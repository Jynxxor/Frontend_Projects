const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("seconds");

const start = document.getElementById("start");
const reset = document.getElementById("reset");

const disp = document.getElementById("disp");

var interval = null;
var total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

Timer = ()=>{
    totalValue();
    total--;

    if(total >= 0){
        var hr = Math.floor(total/3600);
        var min = Math.floor((total/60) - (hr*60));
        var sec = total - ((hr*3600) + (min*60));

        hour.value = hr < 10? "0" + hr : hr;
        minute.value = min < 10? "0" + min : min;
        second.value = sec < 10? "0" + sec : sec;
    } else{
        disp.innerText = "Time Over !!";
    }
}

let isRunning = false;

start.addEventListener('click', ()=>{
    if(isRunning){  //timer pause fn
        clearInterval(interval);
        start.innerText = "START";
        disp.innerText = "Timer Stopped";
    } 
    else{         //timer start fn
        if(interval !== null){      
            clearInterval(interval);
        }
        start.innerText = "PAUSE";
        interval = setInterval(Timer, 1000);
        disp.innerText = "Timer Started";
    }
    isRunning = !isRunning;
});

reset.addEventListener('click', ()=>{
    clearInterval(interval);

    hour.value = "";
    minute.value = "";
    second.value = "";

    disp.innerText = "Timer";
    isRunning = false;
    start.innerText = "START";
});

