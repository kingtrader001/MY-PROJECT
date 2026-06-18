

let main = document.querySelector("main")

    
main.addEventListener("click", (dets)=>{
 let id = dets.target.id
   console.log(id)
main.style.backgroundColor = id
})
