// let btn = document.querySelector("#btn");
// const blur = document.querySelector(".blur");

// btn.addEventListener("click", function () {
//   blur.style.display = "none";
// });

// let passage = document.getElementsByClassName("typing-area")[0];

// let text = passage.textContent.trim();
// let words = text.split("");

// let html = "";

// for (let char of text) {
//   html += `<span>${char}</span>`;
// }

// passage.innerHTML = html;

// console.log(words);

// console.log(words[0]);

// let correct = 0;
// let wrong = 0;
// let index = 0;
// let typingHistory = [];

// let spans = document.querySelectorAll(".typing-area span");
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Backspace") {
//     if (index > 0) {
//       index--;

//       let last = typingHistory.pop();

//       if (last === "correct") {
//         correct--;
//         console.log(correct);
//       }

//       if (last === "wrong") {
//         wrong--;
//         console.log(wrong);
//       }

//       spans[index].style.backgroundColor = "yellow";
//     }

//     return;
//   }

//   if (event.key.length > 1) {
//     return;
//   }

//   if (event.key === words[index]) {
//     spans[index].style.backgroundColor = "green";
//     index++;
//     correct++;
//     typingHistory.push("correct");

//     if (index < spans.length) {
//       spans[index].style.backgroundColor = "yellow";
//     }
//   } else {
//     spans[index].style.backgroundColor = "red";
//     index++;
//     wrong++;
//     typingHistory.push("wrong");
//     if (index < spans.length) {
//       spans[index].style.backgroundColor = "yellow";
//     }
//   }

//   var totalword = correct + wrong;
//   let wpm = totalword / 5 / 1;
//   let speed = document.querySelector("#wpm");
//   speed.innerText = Math.floor(wpm);

//   let accu = document.querySelector("#acu");
//   let accuracy = (correct / totalword) * 100;

//   let valueacc = accuracy.toFixed(1);
//   accu.innerText = valueacc + "%";
//   if (accuracy > 100) {
//     accuracy = 100;
//     accu.innerText = valueacc + "%";
//   }
// });

// let started = false;

// document.addEventListener("keydown", function () {
//   if (started === false) {
//     started = true;

//     startTimer();
//   }
// });

// function startTimer() {
//   let time = 60;
//   let time22 = document.querySelector("#time22");

//   time22.innerText = time;

//   let timer = setInterval(() => {
//     time--;

//     time22.innerText = time;

//     if (time <= 0) {
//       clearInterval(timer);
//       alert("Stop");
//     }
//   }, 1000);
//   if (time <= 0) {
//     clearInterval(timer);

//     let bestWPM = localStorage.getItem("bestWPM") || 0;

//     if (wpm > bestWPM) {
//       localStorage.setItem("bestWPM", Math.floor(wpm));
//     }

//     alert("Stop");
//   }

//   window.addEventListener("load", () => {
//   let best = localStorage.getItem("bestWPM") || 0;
//   document.querySelector("#bestwpm").innerText = bestWPM;
// });
// }

// let selections = document.querySelectorAll(".selection");

// selections.forEach((item) => {
//   item.addEventListener("click", () => {
//     selections.forEach((box) => {
//       box.classList.remove("selected");
//     });

//     item.classList.add("selected");
//   });
// });



// let age = 20;

// let person = age >= 10 && age <= 20 

// console.log(person)

// 

let a = 2;
let b = 3;
 
 let x = a / b


let num =   x %= 0 || nahi

console.log (num)