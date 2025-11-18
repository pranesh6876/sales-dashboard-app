import React from "react";
import salesData from "../data/salesData";
import { useNavigate } from "react-router-dom";

export default function SalesDashboard() {
  const nav = useNavigate();

  const maxRevenue = Math.max(...salesData.salesTable.map(s => s.revenue));
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Sales Dashboard</h2>
        <div>
          <button className="btn" onClick={() => nav("/")}>Logout</button>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <h3>Total Sales</h3>
          <div className="value">₹{salesData.totalSales.toLocaleString()}</div>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <div className="value">{salesData.orders}</div>
        </div>
        <div className="card">
          <h3>Locations</h3>
          <div className="value">{salesData.locations.join(", ")}</div>
        </div>
      </div>

      <div className="table-card">
        <h3 style={{ marginTop: 6 }}>Sales by City</h3>
        <div style={{ margin: "12px 0" }}>
          {salesData.salesTable.map((row, idx) => {
            const pct = Math.round((row.revenue / maxRevenue) * 100);
            return (
              <div key={idx} className="bar-row">
                <div className="bar-label">{row.city}</div>
                <div className="bar"><i style={{ width: `${pct}%` }} /></div>
                <div style={{ width: 90, textAlign: "right", fontSize: 13 }}>₹{row.revenue}</div>
              </div>
            );
          })}
        </div>

        <table>
          <thead>
            <tr><th>City</th><th>Revenue</th><th>Orders</th></tr>
          </thead>
          <tbody>
            {salesData.salesTable.map((r, i) => (
              <tr key={i}>
                <td>{r.city}</td>
                <td>₹{r.revenue.toLocaleString()}</td>
                <td>{r.orders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
