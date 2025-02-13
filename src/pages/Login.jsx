import { useState } from "react";
import "./login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    
    if (activeTab === "admin") {
      window.location.href = "/admin"; // Redirect to Admin Screen
    } else {
      window.location.href = "/home"; // Redirect to Home Screen
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🚀 Pool Parking APP</h2>

        {/* Tab Selection */}
        <div className="tab-container">
          <button
            className={activeTab === "user" ? "active" : ""}
            onClick={() => setActiveTab("user")}
          >
            User
          </button>
          <button
            className={activeTab === "admin" ? "active" : ""}
            onClick={() => setActiveTab("admin")}
          >
            Admin
          </button>
        </div>

        {/* Login Form */}
        <form>
          <label>Login as {activeTab.toUpperCase()}</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={handleSubmit}>Submit 🚀</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
