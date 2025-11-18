import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Landing from "./pages/Landing";
import SalesLogin from "./pages/SalesLogin";
import ClientLogin from "./pages/ClientLogin";
import SalesDashboard from "./pages/SalesDashboard";
import ClientDashboard from "./pages/ClientDashboard";

function Header() {
  return (
    <div className="app-header">
      <h1>Distribution & Sales Portal</h1>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/sales-login">Sales Login</Link>
        <Link to="/client-login">Client Login</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sales-login" element={<SalesLogin />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/sales-dashboard" element={<SalesDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
        </Routes>
      </div>
    </>
  );
}
