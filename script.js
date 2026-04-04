// Countdown Timer Logic
function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `0 ngày ${hours} giờ ${minutes} phút ${seconds} giây`;

        if (--timer < 0) {
            timer = duration; // restart for demo purposes
        }
    }, 1000);
}

window.onload = function () {
    // Set timer to 2 hours, 45 minutes, 10 seconds for the demo
    const twoHours45Min = 2 * 3600 + 45 * 60 + 10;
    const display = document.querySelector('#countdown');
    startTimer(twoHours45Min, display);
};
