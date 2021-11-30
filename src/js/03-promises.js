import Notiflix from 'notiflix';


const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  
  const formData = new FormData(form);
  console.log(formData);
  const objectData = {};//это обьект наших записей в полях

    formData.forEach((value, name) => {//тут мы определяем что в полях стоит и это направляем в нейм и велью
    objectData[name] = Number(value);//говорим что велью это цыфра
    });
  let amount = objectData.amount;
  console.log('amount', amount);

  let delay = Number(objectData.delay);
  console.log("delay",delay)


 let step = Number(objectData.step);
 console.log('step', step)

  let position = '';//єто номер создаваемого промиза
 for (let index = 1; index <= amount; index++) {
  position = index; 

   delay += step;//к-во времени мы плюсуем шаги, переходим

 ;
  
  const createPromise = (position, delay) => {
  
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
     
    setInterval(() => {
      
      
        if (shouldResolve) {
      // Fulfill 
      resolve({ position, delay });
    } 
      // Reject
      reject({ position, delay });
    
       }, delay)
    });
   
  };
   
 createPromise(position, delay)
    .then(({ position, delay }) => {
    Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
   Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
  }); 

};

 }
 
   
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//написать скрипт которій при submit вызывает функцию
//createPromise(position, delay) столько раз сколько ввели amount
//При каждом вызове передай ей номер создаваемого промиса (position) 
//и задержку учитывая введенную пользователем первую задержку
//(delay) и шаг(step).


// Дополни код функции createPromise так, чтобы она возвращала один промис,
//   который выполянется или отклоняется через delay времени.
//   Значением промиса должен быть объект, в котором будут свойства position и 
//   delay со значениями одноименных параметров.Используй начальный код функции для выбора того,
//   что нужно сделать с промисом - выполнить или отклонить.