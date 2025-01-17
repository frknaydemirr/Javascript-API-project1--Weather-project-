const url = "https://api.openweathermap.org/data/2.5/";
const key = "6786d594f4280663ba074b51ad85276f";

const setQuery = (e) => {
  if (e.key === "Enter") getResult(searchBar.value);
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;

  fetch(query)
    .then((weather) => weather.json())
    .then((data) => {
      console.log(data);
      let city = document.querySelector(".city");
      city.innerText = `${data.name},${data.sys.country}`;
      let temp = document.querySelector(".temp");
      temp.innerText = `${Math.round(data.main.temp)}°C`;

      let desc = document.querySelector(".desc");
      desc.innerText = data.weather[0].description;

      let minmax = document.querySelector(".minmax");
      minmax.innerText = `${Math.round(data.main.temp_min)}°C /
      ${Math.round(data.main.temp_max)}°C`;
    });
};

//keypress klavyeden bir tuşa basıldığında tetiklenen olay için;
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
