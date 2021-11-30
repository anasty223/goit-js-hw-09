import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

  const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
    if (selectedDates[0]< Date.now()) {
    refs.startBtn.setAttribute('disabled', true);
    window.alert( "Please choose a date in the future") 
    }  refs.startBtn.removeAttribute('disabled');
      
    refs.inputData.setAttribute('disabled', true);
      refs.startBtn.addEventListener('click', () => {
          function timer() {
                let currentData = new Date();
                const dataTime = selectedDates[0] - currentData;
 if (dataTime < 0) {
     return;
    }
              
       let time = getTimeComponents(dataTime);
            
     console.log(time)

     updateClockFace(time)
   
              
    }
        setInterval(timer, 1000);
         
    //  refs.startBtn.setAttribute('disabled', true);
    //  refs.startBtn.removeAttribute('disabled');
        })
        
       },
    
    
  };


flatpickr("#datetime-picker", options)

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    day: document.querySelector('[data-days]'),
    hour: document.querySelector('[data-hours]'),
    minute: document.querySelector('[data-minutes]'),
    second: document.querySelector('[data-seconds]'),
    inputData: document.querySelector('#datetime-picker'),
}

//  class Timer {
//     constructor({onTick}) {
//         // this.intervalId = null;
//         // this.isActive = false;
//         this.onTick = onTick;
//     }
//     start() {
       
//         if (this.isActive) {
//             return;
//         }

//      const startTime = Date.parse(refs.inputData.value);
//         // this.isActive = true;
//     setInterval(() => {
         
//         const timeTimer = Date.parse(refs.inputData.value);
//         const deltaTime = timeTimer - startTime;
//         const time = getTimeComponents(deltaTime);

//             // updateClockFace(time)
//           this.onTick(time)
    
//         }, 1000);
//         // refs.startBtn.removeAttribute('disabled');
       
//     }

// }
// const timer = new Timer({
//     onTick: updateClockFace,
// });
// function updateClockFace({ days, hours, minutes, seconds }) {
//     refs.inputData.textContent=`${days}:${hours}:${minutes}:${seconds}`
// }
// console.log(updateClockFace)
// timer.start();

function getTimeComponents(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

    //ставится 00 
function pad(value) {
    return String(value).padStart(2, '0');
    }
    
    //математика
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

//

function updateClockFace({ days, hours, minutes, seconds }) {
    refs.day.textContent = `${days}`;
    refs.hour.textContent = `${hours}`;
    refs.minute.textContent = `${minutes}`;
    refs.second.textContent = `${seconds}`;

     
}
// =================================================================

