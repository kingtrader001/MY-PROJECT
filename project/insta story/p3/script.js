

let btn = document.querySelector("#btn")
let rate = document.querySelector("#loverate")

btn.addEventListener("click", function(){
   let bfname = document.querySelector("#bfname").value.trim().toUpperCase();
let gfname = document.querySelector("#gfname").value.trim().toUpperCase();


 if(bfname === "" || gfname === ""){
    alert("bhai kuch likh le yarr")
   return
    }

if(bfname === "SAURABH" && gfname === "SONAM") {
  rate.innerHTML = "100%"
return
    }
   
let len1 = bfname.length
let len = gfname.length

let love = (Math.pow(len1 + len, 8) % 41) + 60;
     rate.innerHTML = love + "%"
  
    
})

