import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  //OpenWeather parameters
  params: {
    units: "metric",
    lang: "kr",
    //MY API KEY
    appid: "e810d71b6225cf11a8d55f743af92e49",
  },
});

export const getWeather = () => {
  const lat = 35.256968236543194;
  const lon = 129.219119605405;
  return instance.get(`weather?lat=${lat}&lon=${lon}`);
};
