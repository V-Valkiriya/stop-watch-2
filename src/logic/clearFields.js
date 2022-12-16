import data from '../data.js';

function clearFields() {
    const minEl = document.querySelector('.minutes');
    const secEl = document.querySelector('.seconds');
    const millisecEl = document.querySelector('.milliseconds');
    data.minute = 0;
    data.second = 0;
    data.millisecond = 0;
    minEl.textContent = '00';
    secEl.textContent = '00';
    millisecEl.textContent = '00';
}

export default clearFields;