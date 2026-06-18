// // ====================
// // INDEX PAGE
// // ====================

// let btn = document.querySelector("#btn");

// if(btn){

//     btn.addEventListener("click", () => {

//         let name = document.querySelector("#name").value;

//         let email = document.querySelector("#Email").value;

//         let github = document.querySelector("#Username").value;



//         if(name === "" || email === "" || github === ""){

//             alert("Sab details bhar");

//         }

//         else{

//             window.location.href =
//             `ticket.html?name=${name}&email=${email}&github=${github}`;

//         }

//     });

// }



// // ====================
// // TICKET PAGE
// // ====================

// let params = new URLSearchParams(window.location.search);

// let name = params.get("name");

// let email = params.get("email");

// let github = params.get("github");



// // FULL NAME

// let fullName = document.querySelector(".full-namm");

// if(fullName){

//     fullName.innerText = name;

// }



// // EMAIL

// let ticketEmail = document.querySelector("#ticket-email");

// if(ticketEmail){

//     ticketEmail.innerText = email;

// }



// // GITHUB USERNAME

// let userName = document.querySelector(".user-name");

// if(userName){

//     userName.innerText = "@" + github;

// }


let btn = document.querySelector("#btn")

if(btn){


    btn.addEventListener("click" , () => {

        let name = document.querySelector("#name").value;
        let email = document.querySelector("#Email").value;
        let username = document.querySelector("#Username").value;

 let date = new Date();

let options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

let today = date.toLocaleDateString("en-US", options);

           let num = Math.floor(Math.random() * 90000) + 10000;

          
        if(name === "" || email === "" || username === ""){
            alert("bhai plzzz kuch dal le ")
        }else{
         
            window.location.href =
           `ticket.html?name=${name}&email=${email}&github=${username}&id=${num}&today=${today}`;
        }

    })
}


let params = new URLSearchParams(window.location.search)

let name = params.get("name")
let email = params.get("email")
let github = params.get("github")
let id = params.get("id")
let today= params.get("today")


let fullName = document.querySelector(".full-namm")

if(fullName){
    fullName.innerText = name
}

let ticketEmail = document.querySelector("#ticket-email");

 if(ticketEmail){

     ticketEmail.innerText = email;

 }


  let userName = document.querySelector(".user-name");

if(userName){

    userName.innerText = "@" + github;

}

  let userId = document.querySelector(".id");

if(id){

   userId.innerText = "#" + id;

}

  let ticketDate = document.querySelector(".date");

if(ticketDate){

   ticketDate.innerText = today + " / India, UP";

}

// ==========================
// STOP NEW TAB OPEN
// ==========================

document.addEventListener("dragover", (e) => {

    e.preventDefault();

});



document.addEventListener("drop", (e) => {

    e.preventDefault();

});




// ==========================
// SELECT ELEMENTS
// ==========================

let inputFile = document.querySelector("#input-file");

let preview = document.querySelector("#preview");

let uploadText = document.querySelector("#upload-text");

let imgView = document.querySelector("#img-viwe");




// ==========================
// CLICK UPLOAD
// ==========================

inputFile.addEventListener("change", uploadImage);




// ==========================
// DRAG OVER
// ==========================

imgView.addEventListener("dragover", (e) => {

    e.preventDefault();

});




// ==========================
// DROP IMAGE
// ==========================

imgView.addEventListener("drop", (e) => {

    e.preventDefault();

    inputFile.files = e.dataTransfer.files;

    uploadImage();

});




// ==========================
// IMAGE FUNCTION
// ==========================

function uploadImage(){

    let file = inputFile.files[0];



    // CHECK IMAGE EXIST

    if(!file){

        return;

    }



    let imgLink = URL.createObjectURL(file);



    // SHOW IMAGE

    preview.src = imgLink;

    preview.style.display = "block";



    // HIDE TEXT

    uploadText.style.display = "none";

}