import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SalesLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username === "sales" && form.password === "1234") {
      navigate("/sales-dashboard");
    } else {
      alert("Invalid credentials. Try sales / 1234");
    }
  };

  return (
    <div className="login-card">
      <h2>Sales User Login</h2>
      <form onSubmit={handleLogin}>
        <input
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          placeholder="Username"
        />
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
          type="password"
        />
        <div>
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
