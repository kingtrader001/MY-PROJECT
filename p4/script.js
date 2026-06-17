let btn = document.querySelector("#btn");
let income = document.querySelector("#income");
let tex = document.querySelector("#tex1");

btn.addEventListener("click", function () {
  let value = Number(income.value);
  let rate;
  let amount;
  let slab;

  if (income.value === "") {
    alert("bhai value");
    return;
  } else if (value >= 0 && value <= 1200000) {
    rate = 0;
    amount = 0;
    slab = 0;
  } else if (value > 1200000 && value <= 1600000) {
    rate = 15;
    amount = 1200000;
    slab = 0;
  } else if (value > 1600000 && value <= 2000000) {
    rate = 20;
    amount = 1600000;
    slab = 60000; // 4L × 15%
  } else if (value > 2000000 && value <= 2400000) {
    rate = 25;
    amount = 2000000;
    slab = 140000; // 60000 + 80000
  } else {
    rate = 30;
    amount = 2400000;
    slab = 240000; // 60000 + 80000 + 100000
  }

  let tax = (((value - amount) * rate) / 100) + slab;

  tex.textContent = "₹" + tax;
});