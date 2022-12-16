import data from '../data.js';


function startTimer() {
    const minEl = document.querySelector('.minutes');
    const secEl = document.querySelector('.seconds');
    const millisecEl = document.querySelector('.milliseconds');

    data.millisecond++;
    if (data.millisecond < 9) {
        millisecEl.innerText = '0' + data.millisecond;
    }
    if (data.millisecond > 9) {
        millisecEl.innerText = data.millisecond;
    }
    if (data.millisecond > 99) {
        data.second++;
        secEl.innerText = '0' + data.second;
        data.millisecond = 0;
        millisecEl.innerText = '0' + data.millisecond;
    }

    if (data.second < 9) {
        secEl.innerText = '0' + data.second;
    }
    if (data.second > 9) {
        secEl.innerText = data.second;
    }  
    if (data.second > 59) {
        data.minute++;
        minEl.innerText = '0' + data.minute;
        data.second = 0;
        second.innerText = '0' + data.second;
    }
    if (data.minute < 9) {
    minEl.innerText = '0' + data.minute;
    }
    if (data.minute > 9) {
        minEl.innerText = data.minute;
    }
}

export default startTimer;