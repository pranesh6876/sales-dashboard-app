import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 18 }}>
        <h2>Welcome — choose your portal</h2>
        <p>Pick Sales or Client to login and view dashboards with sample data</p>
      </div>

      <div className="choose-card">
        <div className="box" onClick={() => nav("/sales-login")}>
          <h3>Sales User</h3>
          <p>Login to see sales performance, orders & locations</p>
        </div>

        <div className="box" onClick={() => nav("/client-login")}>
          <h3>Client</h3>
          <p>View India distribution map & details per location</p>
        </div>
      </div>

      <div style={{ marginTop: 28, textAlign: "center" }}>
        <p style={{ color: "#475569" }}>
          Demo credentials — Sales: <b>sales / 1234</b> · Client: <b>client / 1234</b>
        </p>
      </div>
    </div>
  );
}
