import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const Rain = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minRainfall, setMinRainfall] = useState(null);
  const [maxRainfall, setMaxRainfall] = useState(null);
  const [avgTemp, setAvgTemp] = useState(null);
  const [avgHumidity, setAvgHumidity] = useState(null);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user/data');
        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filtered = data.filter(item => item.date === selectedDate);

      if (filtered.length > 0) {
        setMinTemp(filtered[0].min_temperature);
        setMaxTemp(filtered[0].max_temperature);
        setMinRainfall(filtered[0].min_humidity);
        setMaxRainfall(filtered[0].max_humidity);
        setAvgTemp((maxTemp+minTemp)/2);
        setAvgHumidity((maxRainfall+minRainfall)/2);
      } else {
        setMinTemp(null);
        setMaxTemp(null);
        setMinRainfall(null);
        setMaxRainfall(null);
        setAvgTemp(null);
        setAvgHumidity(null);
      }
    }
  }, [selectedDate, data,maxRainfall,minRainfall,maxTemp,minTemp]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Extract unique dates from the data
  const uniqueDates = Array.from(new Set(data.map(item => item.date))).sort();

  return (
    <div className="absolute top-0 left-64 right-0 mx-10">
      <h1 className="text-2xl font-bold mb-4">Filter Component</h1>
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <select onChange={handleDateChange} value={selectedDate} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="">Select a date...</option>
            {uniqueDates.map((date, index) => (
              <option key={index} value={date}>{date}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Weather Statistics</h2>
        {selectedDate ? (
          <div>
            <p className="text-lg">Min Temperature: {minTemp !== null ? `${minTemp}°C` : 'N/A'}</p>
            <p className="text-lg">Max Temperature: {maxTemp !== null ? `${maxTemp}°C` : 'N/A'}</p>
            <p className="text-lg">Min Rainfall: {minRainfall !== null ? `${minRainfall}mm` : 'N/A'}</p>
            <p className="text-lg">Max Rainfall: {maxRainfall !== null ? `${maxRainfall}mm` : 'N/A'}</p>
            <p className="text-lg">Avg Temp: {avgTemp !== null ? `${avgTemp}mm` : 'N/A'}</p>
            <p className="text-lg">Avg Hum: {avgHumidity !== null ? `${avgHumidity}mm` : 'N/A'}</p>
          </div>
        ) : (
          <p className="text-lg">Please select a date to see the statistics.</p>
        )}
      </div>
    </div>
  );
};

export default Rain;
