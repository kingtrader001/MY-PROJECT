let timer = document.querySelector(".timer")

setInterval(()=>{
    
let current = Date.now()

let myBd = new Date(2026,6,14).getTime();

let left = myBd - current

let day = Math.floor((left)/(1000*60*60*24))
left%=1000*60*60*24
let hr = Math.floor((left)/(1000*60*60))
left%=1000*60*60
let min = Math.floor((left)/(1000*60))
left%=1000*60
let sec = Math.floor((left)/(1000))
left%=1000

timer.textContent = `day:${day} hours:${hr} min:${min} sec:${sec}`

},1000)