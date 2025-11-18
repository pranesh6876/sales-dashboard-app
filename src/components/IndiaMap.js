import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

export default function IndiaMap({
  onSelectState,
  markers = [],
  onHoverState,
}) {
  // we will fetch the topojson from public folder — place it at /public/india.topo.json
  const INDIA_TOPO_URL = "/india.geo.json";
  const [tooltip, setTooltip] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (evt) => {
    setMousePos({ x: evt.clientX, y: evt.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1000, center: [78.9629, 22.5937] }}
        width={800}
        height={520}
      >
        <Geographies geography={INDIA_TOPO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // try multiple possible property names to ensure compatibility
              const props = geo.properties || {};
              const stateName =
                props.st_nm ||
                props.NAME_1 ||
                props.NAME ||
                props.STATE_NAME ||
                props.STATE ||
                props.st_name ||
                props.name ||
                "Unknown";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onSelectState(stateName)}
                  onMouseEnter={() => {
                    setTooltip(stateName);
                    if (onHoverState) onHoverState(stateName);
                  }}
                  onMouseLeave={() => {
                    setTooltip(null);
                    if (onHoverState) onHoverState(null);
                  }}
                  style={{
                    default: {
                      fill: "#D1D5DB",
                      outline: "none",
                      stroke: "#4B5563",
                      strokeWidth: 0.3,
                    },
                    hover: {
                      fill: "#60A5FA",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#2563EB",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* markers for distribution centers (markers array contains {name, coordinates}) */}
        {markers.map((m, i) => (
          <Marker key={i} coordinates={m.coordinates}>
            <circle r={2.5} fill="#DC2626" stroke="#ffffff" strokeWidth={1} />
            <text
              textAnchor="middle"
              y={-6}
              style={{
                fontSize: "10px",
                fill: "#1f2937",
                pointerEvents: "none",
              }}
            >
              {m.name}
            </text>
          </Marker>
        ))}
        {/* {markers.map((m, i) => (
          // <Marker key={i} coordinates={m.coordinates}>
          //   <circle
          //     r={2.5}
          //     fill="#DC2626" // red dot
          //     stroke="#ffffff" // white outline
          //     strokeWidth={1}
          //   />
          // </Marker>
          <Marker key={i} coordinates={m.coordinates}>
            <svg
              width={10}
              height={10}
              viewBox="0 0 24 24"
              style={{ transform: "translate(-5px, -5px)" }}
            >
              <path
                fill="#DC2626"
                d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7z"
              />
            </svg>
          </Marker>
        ))} */}
      </ComposableMap>

      {tooltip && (
        <div
          className="tooltip"
          style={{ left: mousePos.x + 8, top: mousePos.y - 8 }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
}
