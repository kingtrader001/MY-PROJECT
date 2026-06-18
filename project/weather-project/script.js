const API_KEY = "7bf3f09e01f4eabee9483d21e48df0ed";

const work1 = document.querySelector(".title");
const icon = document.getElementById("icon");
const work = document.querySelector("#work");
let clicked = false;
work1.addEventListener("click", () => {
  if (!clicked) {
    icon.style.rotate = "90deg";
    work.style.display = "block";
    clicked = true;
  } else {
    icon.style.rotate = "0deg";
    work.style.display = "none";
    clicked = false;
  }
});

const search = document.getElementById("Search");
const sunrise1 = document.getElementById("sunrise");

const wind = document.getElementById("wind");
const temp = document.getElementById("temp");
const weather = document.querySelector(".weather-box2");
const weatherH1 = document.querySelector("#city");

search.addEventListener("click", () => {
  let city = document.querySelector("#city-name").value.trim();

  if (city === "") {
    alert("Enter your city");
    return;
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  )
    .then((res) => res.json())
    .then((data) => {
      weatherH1.textContent = `${data.name}, ${data.sys.country}`;
      wind.textContent = `${data.wind.speed} m/s`;
      document.getElementById("hum").textContent = `${data.main.humidity}%`;
      temp.textContent = `${Math.floor(data.main.temp)}°C`;
      weather.style.display = "block";

      const sunrise = data.sys.sunrise;

      const date = new Date(sunrise * 1000);

      const time = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      sunrise1.textContent = `${time}`;

      const sunset = data.sys.sunset;

      const date2 = new Date(sunset * 1000);

      const time2 = date2.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });


      document.getElementById("sunset2").textContent = `${time2}`;
     
    })
     .catch((err) => {
    alert("Something went wrong");
    
  })
});
