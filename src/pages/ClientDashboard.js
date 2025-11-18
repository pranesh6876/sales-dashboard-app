import React, { useState } from "react";
import IndiaMap from "../components/IndiaMap";
import DistributionPanel from "../components/DistributionPanel";
import distributionData from "../data/distributionData";
import { useNavigate } from "react-router-dom";

export default function ClientDashboard() {
  const [selectedState, setSelectedState] = useState(null);
  const nav = useNavigate();

  // Prepare markers from distributionData (convert [lon,lat] -> [lon, lat] as react-simple-maps expects [lon,lat])
  const markers = Object.keys(distributionData).map((st) => ({
    name: st,
    coordinates: distributionData[st].coords
  }));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Client Distribution Map</h2>
        <div>
          <button className="btn" onClick={() => nav("/")}>Logout</button>
        </div>
      </div>

      <div className="client-grid">
        <div className="map-card">
          <IndiaMap
            onSelectState={(s) => setSelectedState(s)}
            markers={markers}
          />
        </div>

        <div className="detail-card">
          <DistributionPanel selectedState={selectedState} data={distributionData} />
        </div>
      </div>
    </div>
  );
}
