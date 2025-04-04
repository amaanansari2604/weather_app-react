import React, { useState } from "react";
import Weather from "./Weather";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Weather Forecast</h1>
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={handleCityChange} 
        />
        <Weather city={city} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
