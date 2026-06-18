const hr = document.querySelector(".clock")


setInterval(function () {
    let date = new Date();

   let time = date.toLocaleTimeString()

   hr.textContent = time
}, 1000);
