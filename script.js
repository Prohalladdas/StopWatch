let timing = document.querySelector(".timing");
let stopBtn = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

let millisecond = 0;
let second = 0;
let minutes = 0;

let timerID = null;

start.addEventListener("click", function () {
    if (timerID !== null) {
        clearInterval(timerID);
    };
    timerID = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timerID);
});

reset.addEventListener("click", function () {
    clearInterval(timerID);
    timing.innerHTML = '00 : 00 : 00';
    millisecond = second = minutes = 0;
});

function startTimer() {
    millisecond++

    if (millisecond === 100) {

        millisecond = 0;
        second++;

        if (second === 60) {
            second = 0;
            minutes++;
        };
    };

    let MillisecondString = millisecond < 10 ? `0${millisecond}` : millisecond;
    let SecondString = second < 10 ? `0${second}` : second;
    let MinutesString = minutes < 10 ? `0${minutes}` : minutes;

    timing.innerHTML = `${MinutesString} : ${SecondString} : ${MillisecondString}`;
};