// src/components/MapChart.jsx
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';

// Alternative URL for TopoJSON
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/world/110m.json";

const highlightedCountries = ["USA", "CAN", "MEX"];

const MapChart = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      <ComposableMap data-tip="">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const isHighlighted = highlightedCountries.includes(geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: isHighlighted ? "#F53" : "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
    </div>
  );
};

export default MapChart;
