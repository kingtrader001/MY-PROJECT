const btn = document.querySelector("#btn")
const qutes = [
    "uieuherefvuefvuefvo","eibefvhbifvibevibevib","yhiewrieuuvuuvef","hbvibwibvbbuwuvuu","uy8vrefvifvbfivf"
]

const h1 = document.querySelector("h1")

btn.addEventListener("click", ()=>{
    let index = Math.floor(Math.random()*5)
console.log(index)
   h1.innerHTML = qutes[index]
})