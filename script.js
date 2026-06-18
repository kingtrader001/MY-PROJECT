document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    window.open(e.target.dataset.url, "_blank");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 100,
      behavior: "smooth",
    });
  });
});

document.getElementById("btn").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});

const menu = document.querySelector(".menu");
const ss = document.querySelectorAll(".ss");
const showsection = document.querySelector(".showsection");
let con = false;
const allSection = document.querySelector(".allSection");
menu.addEventListener("click", () => {
  menu.addEventListener("click", () => {
    if (con == false) {
      menu.style.rotate = "90deg";
      ss.forEach((item) => {
        item.style.display = "block";
      });
      showsection.style.display = "block";
      con = true;
    } else {
      menu.style.rotate = "0deg";
      con = false;

      ss.forEach((item) => {
        item.style.display = "none";
      });
      showsection.style.display = "none";
    }
  });
});
