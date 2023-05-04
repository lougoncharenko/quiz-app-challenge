//DOM objects
const button = document.getElementById("start-button");
const time = document.getElementById("time")
//Variables

//Functions
// const startQuiz = () => {
//   console.log('quiz started')
//   count = startTimer() 
  
  
// }

const startQuiz = () => {
  console.log('timer started');
  let count = 60;
  const timer = setInterval(function() {
    console.log(count)
    count -- 
    time.innerHTML = `${count}`
    if(count == 1) {
      clearInterval(timer);
    } 
}, 1000);
}

//Event listeners
button.addEventListener('click', startQuiz);


