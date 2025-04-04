import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchWeather } from "./services/weatherApi";

const Weather = ({ city }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const { data, error, isLoading } = useQuery(
    ["weather", city],
    () => fetchWeather(city),
    {
      enabled: !!city, 
      retry: false,    
      onError: (error) => {
        if (error.response && error.response.status === 400) {
          setErrorMessage("Invalid city name. Please enter a valid city.");
        } else {
          setErrorMessage("An error occurred while fetching data.");
        }
      },
      onSuccess: () => {
        setErrorMessage(null); 
      }
    }
  );

  if (isLoading) return <p>Loading...</p>;

  
  if (errorMessage) {
    return (
      <div>
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </div>
    );
  }

  if (!data || !data.current) return null;

  const { temp_c, condition } = data.current;
  const { icon, text } = condition;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{city}</h2>
      <p>Temperature: {temp_c}°C</p>
      <p>Condition: {text}</p>
      <img 
        src={icon} 
        alt={text} 
      />
    </div>
  );
};

export default Weather;
