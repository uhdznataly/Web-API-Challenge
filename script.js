let timeSecond = 59;
const timeH = document.querySelector("h3");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time's Up!!!";
}


function check() {
    
    
    var c=0
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz");
    if (q1=="2019") {c++}
    if (q2=="China") {c++}
    if (q3=="Salt") {c++}
    if (q4=="Tumeric") {c++}
    if (q5=="Hinduism") {c++}
   quiz.style.display="none";

   if (c<=3){
    result.textContent=`Your result is ${c}. Try better next time!`

   } else {
    result.textContent=`Your result is ${c}. Keep up the good work!`
   }

}



