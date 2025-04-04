import axios from "axios";

const API_KEY = "2a71addd46804176b95140322242409"; 

export const fetchWeather = async (city) => {
  if (!city) return null;
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  );
  return data;
};
