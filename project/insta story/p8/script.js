const body = document.querySelector("body")

body.addEventListener("click", (dets)=>{
      console.log(`${dets.clientX}px`,`${dets.clientY}px`)

     const circle =  document.createElement(`div`)
     circle.textContent = "hii"
     circle.classList.add(`circle`)

     const color = ['yellow','pink','red','blue','green','orange']

     circle.style.backgroundColor = color[Math.floor(Math.random()*6)];


     circle.style.top = `${dets.clientY-25}px`
     circle.style.left = `${dets.clientX-25}px`


     body.append(circle)


     setInterval(()=>{
        circle.remove();
     },5000)

})