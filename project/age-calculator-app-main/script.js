let show = document.querySelector("#show");

show.addEventListener("click", () => {
  
  console.log("click");
  let error = document.querySelector(".error");
  let derror = document.querySelector("#derror");
  let merror = document.querySelector("#merror");
  let yerror = document.querySelector("#yerror");
  let day = document.querySelector("#day").value;
  let mont = document.querySelector("#mon").value;
  let year = document.querySelector("#year").value;




  if (day === "" || day < 1 || day > 31) {
    derror.style.visibility=  "visible";
    return
   
}

if (mont === "" || mont < 1 || mont > 12) {
     derror.style.visibility=  "visible";
   return
}

if (year === "") {
    derror.style.visibility=  "visible";
    return;
}
show.classList.add("active");
    derror.style.visibility=  "hidden";

  let day1 = document.querySelector("#day1");
  let year1 = document.querySelector("#year1");
  let mont1 = document.querySelector("#mont1");

  let myDate = new Date();


 
  let dobDay = myDate.getDay() - day;

  let dobMont = myDate.getMonth() + 1 - mont;


  

  let dobYear = myDate.getFullYear() - year;

  year1.innerHTML = dobYear;



  if (dobDay < 0) {
    dobMont--;
    let previousMonthDays = new Date(dobYear, dobMont - 1, 0).getDate();

    dobDay += previousMonthDays;
   
   
  }
    day1.innerHTML = dobDay;
 if (dobMont < 0) {
    dobYear--;
    dobMont += 12;
    
}
   mont1.innerHTML = dobMont;



});



