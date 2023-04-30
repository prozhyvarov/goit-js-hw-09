import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
  datePicker: document.querySelector('#datetime-picker'),
};
let timerId = null;

refs.startBtn.setAttribute('disabled', true);
// console.log(refs.days);
// console.log(refs.hours);
// console.log(refs.minutes);
// console.log(refs.seconds);
// console.log(refs.startBtn);
// console.log(refs.datePicker);
