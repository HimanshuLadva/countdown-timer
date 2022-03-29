const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');

const birthday = "8 Nov 2022";
function setTimer() { 
    const newYearDate = new Date(birthday);
    const currentDate = new Date();
    
    const second = Math.floor((newYearDate - currentDate) / 1000);
    
    const day =  Math.floor(second / 3600 / 24);
    days.innerHTML = timeFormat(day);
    
    const hour = Math.floor((second-(day * 3600 * 24)) / 3600);
    hours.innerHTML = timeFormat(hour);
    
    const min = Math.floor((second-(hour * 3600)-(day * 3600 * 24)) / 60);
    mins.innerHTML = timeFormat(min);
    
    const second2 = second -(hour*3600)-(min * 60)-(day * 3600 * 24);
    seconds.innerHTML = timeFormat(second2);
}

function timeFormat(time) {
    return ( time < 10) ? `0${time}`:time;
}

setInterval(setTimer, 1000);
setTimer(); 