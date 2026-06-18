const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const value = document.getElementById("input").value;

  if (value == "") {
    alert("no no");
    return;
  }

  const data = document.createElement(`div`);
  const btn1 = document.createElement(`button`);
  const btn2 = document.createElement(`button`);
btn1.textContent = "check"
btn2.textContent = "delete"
  

  data.classList.add(`data`);

  data.textContent = value;

  document.body.append(data);

  document.body.append(btn1, btn2);

  btn1.addEventListener("click", () => {
    data.style.textDecoration = "line-through";
    data.style.color = "green";
  });

  btn2.addEventListener("click", () => {
    data.remove();
    btn1.remove();
    btn2.remove();
  });

 form.reset()
});
