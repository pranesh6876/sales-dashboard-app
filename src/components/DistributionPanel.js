import React from "react";

export default function DistributionPanel({ selectedState, data }) {
  if (!selectedState) {
    return <h3>Select any state on the map to view details</h3>;
  }

  const stateData = data[selectedState];

  if (!stateData) {
    return <h3>No distribution data for <b>{selectedState}</b></h3>;
  }

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>{selectedState}</h2>

      <p><strong>Distributors:</strong></p>
      <ul>
        {stateData.distributors.map((d, i) => <li key={i}>{d}</li>)}
      </ul>

      <p><strong>Total Orders:</strong> {stateData.orders}</p>
      <p><strong>Profit:</strong> {stateData.profit}</p>
      <p><strong>Total Sales:</strong> {stateData.sales}</p>
    </div>
  );
}
