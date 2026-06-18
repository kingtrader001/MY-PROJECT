const rightAns = {
  q1: "Sachin Tendulkar",
  q2: "West Indies",
  q3: "Sachin Tendulkar",
  q4: "264",
  q5: "Muttiah Muralitharan"
};

let form = document.querySelector("#quizForm");
let btn = document.querySelector("#btn")

let result = document.querySelector(".result")


btn.addEventListener("click", ()=>{

let data = new FormData(form);
let final = 0;
for (let [name, value] of data.entries()) {


    if (value === rightAns[name]) {
       final++
    } 
}



result.textContent = `correct = ${final} out of = 5`
})