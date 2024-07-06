import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import image from '../assets/cloudy.png';
const FilterComponent = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2022");
  const [selectedDate, setSelectedDate] = useState("01-01-2022");
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minHumidity, setMinHumidity] = useState(null);
  const [maxHumidity, setMaxHumidity] = useState(null);
  const [avgTemp, setAvgTemp] = useState(null);
  const [avgHumidity, setAvgHumidity] = useState(null);
  const canvasRefBar = useRef(null);
  const chartInstanceRefBar = useRef(null);
  const canvasRefLine = useRef(null);
  const chartInstanceRefLine = useRef(null);
  const canvasRefPie = useRef(null);
  const chartInstanceRefPie = useRef(null);
  const canvasRefHBar = useRef(null);
  const chartInstanceRefHBar = useRef(null);
  const canvasRefPolar = useRef(null);
  const chartInstanceRefPolar = useRef(null);
  const canvasRefRadar = useRef(null);
  const chartInstanceRefRadar = useRef(null);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user/data");
        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);
//temp
  useEffect(() => {
    if (selectedDate) {
      const filtered = data.filter((item) => item.date === selectedDate);

      if (filtered.length > 0) {
        setMinTemp(filtered[0].min_temperature);
        setMaxTemp(filtered[0].max_temperature);
        setMinHumidity(filtered[0].min_humidity);
        setMaxHumidity(filtered[0].max_humidity);
        setAvgTemp(
          (filtered[0].max_temperature + filtered[0].min_temperature) / 2
        );
        setAvgHumidity(
          (filtered[0].max_humidity + filtered[0].min_humidity) / 2
        );
      } else {
        setMinTemp(null);
        setMaxTemp(null);
        setMinHumidity(null);
        setMaxHumidity(null);
        setAvgTemp(null);
        setAvgHumidity(null);
      }
    }
  }, [selectedDate, data]);
//humidity
  useEffect(() => {
    if (!canvasRefBar.current || !data.length || selectedYear === "") return;

    const filteredData = data.filter(
      (item) => item.year === parseInt(selectedYear)
    );
    console.log("Filtered Data:", filteredData);
    const labels = Array.from(new Set(filteredData.map((item) => item.month)));

    const avgHumidity = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalHumidity = monthlyData.reduce(
        (acc, curr) => acc + curr.average_humidity,
        0
      );
      return totalHumidity / monthlyData.length;
    });

    const avgBarometer = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalBarometer = monthlyData.reduce(
        (acc, curr) => acc + curr.average_barometer,
        0
      );
      return totalBarometer / monthlyData.length;
    });
    if (chartInstanceRefBar.current) {
      chartInstanceRefBar.current.destroy();
    }

    const ctx = canvasRefBar.current.getContext("2d");
    chartInstanceRefBar.current = new Chart(ctx, {
     type: 'bar',
      data: {
        labels: labels,
        datasets: [
          { 
            label: "Avg Humidity",
            data: avgHumidity,
            backgroundColor: "rgba(32,35,74,0.9)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 0.5,
          },
          {
            
            label: "Avg Barometer",
            data: avgBarometer,
            backgroundColor: "rgba(218,246,143,0.9)",
            borderColor: "rgba(45, 192, 192, 1)",
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        
        elements: {
          bar: {
            borderWidth: 2,
          }
        },        
        scales: {
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
          y: {
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRefBar.current) {
        chartInstanceRefBar.current.destroy();
      }
    };
  }, [data, selectedYear]);
//dewpoint
  useEffect(() => {
    if (!canvasRefLine.current || !data.length || selectedYear === "") return;

    const filteredData = data.filter(
      (item) => item.year === parseInt(selectedYear)
    );
    console.log("Filtered Data:", filteredData);
    const labels = Array.from(new Set(filteredData.map((item) => item.month)));

    const avgDewpoint = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalDewpoint = monthlyData.reduce(
        (acc, curr) => acc + curr.average_dewpoint,
        0
      );
      return totalDewpoint / monthlyData.length;
    });

    const avgWindspeed = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalWindspeed = monthlyData.reduce(
        (acc, curr) => acc + curr.max_wind_speed,
        0
      );
      return totalWindspeed / monthlyData.length;
    });
    if (chartInstanceRefLine.current) {
      chartInstanceRefLine.current.destroy();
    }

    const ctx1 = canvasRefLine.current.getContext("2d");
    chartInstanceRefLine.current = new Chart(ctx1, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Avg Dewpoint",
            data: avgDewpoint,
            backgroundColor: "rgba(32, 35, 74,1)",
            borderColor: "rgb(37,45,206)",
            borderWidth: 1,
          },
          {
            label: "Avg Windspeed",
            data: avgWindspeed,
            backgroundColor: "rgb(246,6,106)",
            borderColor: "rgb(37,45,206)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
          y: {
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRefLine.current) {
        chartInstanceRefLine.current.destroy();
      }
    };
  }, [data, selectedYear]);
//gustspeed
  useEffect(() => {
    if (!canvasRefPie.current || !data.length || selectedYear === "") return;

    const filteredData = data.filter(
      (item) => item.year === parseInt(selectedYear)
    );
    console.log("Filtered Data:", filteredData);
    const labels = Array.from(new Set(filteredData.map((item) => item.month)));

    const avgGustspeed = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalGustspeed = monthlyData.reduce(
        (acc, curr) => acc + curr.max_gust_speed,
        0
      );
      return totalGustspeed / monthlyData.length;
    });
    if (chartInstanceRefPie.current) {
      chartInstanceRefPie.current.destroy();
    }

    const ctx2 = canvasRefPie.current.getContext("2d");
    chartInstanceRefPie.current = new Chart(ctx2, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Avg Gustspeed",
            data: avgGustspeed,
            backgroundColor: [
              "rgba(255,99,132, 0.9)",
              "rgba(255, 159, 64, 0.9)",
              "rgba(255, 205, 86, 0.9)",
              "rgba(75, 192, 192, 0.9)",
              "rgba(54, 162, 235, 0.9)",
              "rgba(153, 102, 255, 0.9)",
              "rgba(201, 203, 207, 0.9)",
            ],
            borderColor: "rgba(32,35,74,0.9)",
            borderWidth: 0.5,
          },
        ],
      },
      
    });

    return () => {
      if (chartInstanceRefPie.current) {
        chartInstanceRefPie.current.destroy();
      }
    };
  }, [data, selectedYear]);
//pressure
  useEffect(() => {
    if (!canvasRefRadar.current || !data.length || selectedYear === "") return;

    const filteredData = data.filter(
      (item) => item.year === parseInt(selectedYear)
    );
    console.log("Filtered Data:", filteredData);
    const labels = Array.from(new Set(filteredData.map((item) => item.month)));

    const maxPressure = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalPressure = monthlyData.reduce(
        (acc, curr) => acc + curr.max_pressure,
        0
      );
      return totalPressure;
    });
    const minPressure = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalPressure = monthlyData.reduce(
        (acc, curr) => acc + curr.min_pressure,
        0
      );
      return totalPressure;
    });

    
    if (chartInstanceRefRadar.current) {
      chartInstanceRefRadar.current.destroy();
    }

    const ctx3 = canvasRefRadar.current.getContext("2d");
    chartInstanceRefRadar.current = new Chart(ctx3, {
     
      data: {
        labels: labels,
        datasets: [
          
          {
            type:'line',
            label: "Max Avg Pressure",
            data: maxPressure,
            backgroundColor: "rgba(32, 35, 74,1)",
            
            borderColor: "rgba(45, 192, 192, 1)",
            borderWidth: 0.1,
          },
          {
            type:'bar',
            label: "Min Avg Pressure",
            data: minPressure,
            backgroundColor:"rgb(103,130,239)",
              
            borderColor: "rgba(45, 192, 192, 1)",
            borderWidth: 0.1,
          },
        ],
      },
      
    });

    return () => {
      if (chartInstanceRefRadar.current) {
        chartInstanceRefRadar.current.destroy();
      }
    };
  }, [data, selectedYear]);
//rainfall
  useEffect(() => {
    if (!canvasRefHBar.current || !data.length || selectedYear === "") return;

    const filteredData = data.filter(
      (item) => item.year === parseInt(selectedYear)
    );
    console.log("Filtered Data:", filteredData);
    const labels = Array.from(new Set(filteredData.map((item) => item.month)));

    const sumRainfall = labels.map((month) => {
      const monthlyData = filteredData.filter((item) => item.month === month);

      const totalRainfall = monthlyData.reduce(
        (acc, curr) => acc + curr.rainfall_month,
        0
      );
      return totalRainfall;
    });

    
    if (chartInstanceRefHBar.current) {
      chartInstanceRefHBar.current.destroy();
    }

    const ctx1 = canvasRefHBar.current.getContext("2d");
    chartInstanceRefHBar.current = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sum Rainfall",
            data: sumRainfall,
            backgroundColor: "rgba(118,143,243,0.9)",
            borderColor: "rgb(37,45,206)",
            borderWidth: 1,
          },
          
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            title: {
              display: true,
              text: "Value",
            },
          },
          y: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRefHBar.current) {
        chartInstanceRefHBar.current.destroy();
      }
    };
  }, [data, selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const uniqueYears = Array.from(new Set(data.map((item) => item.year)));
  const uniqueDates = Array.from(new Set(data.map((item) => item.date)));
  // Create an object to store maximum max_heat_index for each year
  
 //heatindex
  useEffect(() => {
    if (!canvasRefPolar.current || !data.length) return;

    
    if (chartInstanceRefPolar.current) {
      chartInstanceRefPolar.current.destroy();
    }
    const maxHeatIndexByYear = {};

  // Iterate over unique years
  uniqueYears.forEach((year) => {
    // Filter the data for the current year
    const filteredYearData = data.filter((item) => item.year === year);
    // Extract max_heat_index values for the current year
    const maxHeatIndexes = filteredYearData.map((item) => item.max_heat_index);
    // Find the maximum value among max_heat_index values for the current year
    const maxHeatIndex = Math.max(...maxHeatIndexes);
    // Store the maximum max_heat_index value for the current year in the object
    maxHeatIndexByYear[year] = maxHeatIndex;
  });

    const labels = Object.keys(maxHeatIndexByYear)
    const ctx4 = canvasRefPolar.current.getContext("2d");
    chartInstanceRefPolar.current = new Chart(ctx4, {
     type: 'polarArea',
      data: {
        labels: labels,
        datasets: [
          { 
            label: "Avg Heat Index",
            data: Object.values(maxHeatIndexByYear),
            backgroundColor: [
              "rgba(255,99,132,0.7)",
              "rgba(255, 159, 64, 0.7)",
              "rgba(255, 205, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(153, 102, 255, 0.7)",
              "rgba(201, 203, 207, 0.7)",
            ],
            borderColor: "rgba(32,35,74,0.9)",
            borderWidth: 0.5,
          },
          
        ],
      },
      
    });

    return () => {
      if (chartInstanceRefPolar.current) {
        chartInstanceRefPolar.current.destroy();
      }
    };
  }, [data, uniqueYears]);


  return (
    <div className="absolute top-5 left-0 right-0 mx-10 ">
      <div className="bg-gray-50 bg-opacity-30 p-4 rounded-md shadow-md mb-4 flex flex-col md:flex-row items-center justify-between">
      <img
        src={image}
        alt="Sample"
        height={50}
        width={50}
        className="rounded-lg shadow-lg"
      />
        <h2 className="text-white text-left text-[43px] font-bold mb-4 md:mb-0">
          Weather Analysis Platform
        </h2>
        <div className="flex space-x-4 mb-4">
          <div>
            <label className="block text-sm  font-bold text-gray-200">
              Year:
            </label>
            <select
              onChange={handleYearChange}
              value={selectedYear}
              className="mt-1 text-gray-900 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Year</option>
              {uniqueYears.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-200">
              Date:
            </label>
            <select
              onChange={handleDateChange}
              value={selectedDate}
              className="mt-1 block text-gray-900 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Date</option>
              {uniqueDates.map((date, index) => (
                <option key={index} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedDate ? (
          <div className="bg-green-200 bg-opacity-50 top-0 items-center flex flex-col md:flex-row ">
            <div className="w-full flex space-x-4 p-4 rounded-md shadow-md">
            <div className="flex flex-col mr-8 text-gray-900">
              <p className="text-sm font-bold">
                {maxTemp !== null ? `${maxTemp}°C` : "N/A"}
              </p>
              <label className="text-sm italic">Max Temp</label>
              <p className="text-sm font-bold">
                {maxHumidity !== null ? `${maxHumidity}%` : "N/A"}
              </p>
              <label className="text-sm italic">Max Humidity</label>
            </div>
            <div className="flex flex-col mr-8 text-gray-900">
              <p className="text-sm font-bold">
                {minTemp !== null ? `${minTemp}°C` : "N/A"}
              </p>
              <label className="text-sm italic">Min Temp</label>

              <p className="text-sm font-bold">
                {minHumidity !== null ? `${minHumidity}%` : "N/A"}
              </p>
              <label className="text-sm italic">Min Humidity</label>
            </div>
            <div className="flex flex-col mr-8 text-gray-900">
              <p className="text-sm font-bold">
                {avgTemp !== null ? `${avgTemp}°C` : "N/A"}
              </p>
              <label className="text-sm italic">Avg Temp</label>
              <p className="text-sm font-bold">
                {avgHumidity !== null ? `${avgHumidity}%` : "N/A"}
              </p>
              <label className="text-sm italic">Avg Hum:</label>
            </div>
            </div>
          </div>
        ) : (
          <p className="text-lg">Please select a date to see the statistics.</p>
        )}
      </div>

      {selectedYear && (
        <div className="bg-gray-50 bg-opacity-30 w-full flex space-x-4 p-4 rounded-md shadow-md">
          <div className=" bg-gray-200 bg-opacity-65 w-1/3 h-auto p-4 rounded-md shadow-md">
            <h2 className="text-xl text-gray-900 font-semibold mb-4">
              Monthly Avg Humidity(%) and Avg Barometer(in) for {selectedYear}
            </h2>
            <canvas
              ref={canvasRefBar}
              id="barChart"
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            ></canvas>
          </div>
          <div className=" bg-gray-200 bg-opacity-65 w-1/3 h-auto p-4 rounded-md shadow-md">
            <h2 className="text-xl text-gray-900 font-semibold mb-4">
            Per Year Heat Index(°F)
            </h2>
            <canvas
              ref={canvasRefPolar}
              id="line"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            ></canvas>
          </div>
          <div className="bg-gray-200 bg-opacity-65 w-1/3 h-auto p-4 rounded-md shadow-md">
            <h2 className="text-xl text-gray-900 font-semibold mb-4">
              Yearly Sum of Rainfall(mm) {selectedYear}
            </h2>
            <canvas
              ref={canvasRefHBar}
              id="pie"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            ></canvas>
          </div>
        </div>
      )}
      {selectedYear && (
        <div className=" bg-gray-50 bg-opacity-30 my-4 w-full  flex space-x-4 p-4 rounded-md shadow-md">
          <div className="bg-gray-200 bg-opacity-65 w-1/3 h-auto p-4 rounded-md shadow-md">
            <h2 className="text-xl text-gray-900 font-semibold  mb-4">
              Monthly Avg Max Pressure(Pa) and Avg Min Pressure(Pa) for {selectedYear}
            </h2>
            <canvas
              ref={canvasRefRadar}
              id="bar"
              style={{ maxWidth: "500px", maxHeight: "900px" }}
            ></canvas>
          </div>
          <div className="bg-gray-200 bg-opacity-65 w-1/3 h-auto p-4 rounded-md shadow-md">
            <h2 className="text-xl text-gray-900 font-semibold mb-4">
              Monthly Avg Dewpoints(°F) and Avg Windspeed(mph) for {selectedYear}
            </h2>
            <canvas
              ref={canvasRefLine}
              id="line"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            ></canvas>
          </div>
          <div className="bg-gray-200 bg-opacity-65 w-1/3 h-auto p-4 rounded-md shadow-md">
            <h2 className="text-xl text-gray-900 font-semibold mb-4">
              Monthly Avg Gustspeed(mph) {selectedYear}
            </h2>
            <canvas
              ref={canvasRefPie}
              id="pie"
              style={{ maxWidth: "500px", maxHeight: "300px" }}
            ></canvas>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
