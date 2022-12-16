import data from '../data.js';
import startTimer from '../components/startTimer.js';
import clearFields from '../logic/clearFields.js';



const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

startButton.addEventListener('click', () => {
    clearInterval(data.interval);
    data.interval = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', () => {
    clearInterval(data.interval);
});

resetButton.addEventListener('click', () => {
    clearInterval(data.interval);
    clearFields();
});