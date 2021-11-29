

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

   function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      };
      console.log(getRandomHexColor)

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let intervalId = null;
function onStart() {
startBtn.setAttribute('disabled', true);
     stopBtn.removeAttribute("disabled");

     intervalId = setInterval(() => {
 const color = `${getRandomHexColor()}`;
       body.style.backgroundColor = color;
  }, 1000);
}
function onStop() {
    
  startBtn.removeAttribute('disabled');
   stopBtn.setAttribute("disabled", true);
    clearInterval(intervalId);

}

// function onStart() {
//     // if (onStart) {
        
//     //    startBtn.removeAttribute('disabled');
//     //     return
//     // } startBtn.setAttribute('disabled', true)

// startBtn.addEventListener('click',  () => {
//   intervalId = setInterval(() => {
 
//   }, 1000);
// });}
// onStart()

// function onStop(){
// stopBtn.addEventListener('click', () => {
//   clearInterval(intervalId);
//   console.log(`Interval with id ${intervalId} has stopped!`);
// });
// }
// onStop()



