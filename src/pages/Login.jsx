import { useState } from "react";
import "./login.css"; // Import CSS
import { useNavigate } from "react-router";

const Login = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${activeTab.toUpperCase()} Login Successful!`);
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
        <form onSubmit={handleSubmit}>
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
          <button type="submit" onClick={() => {
            navigate('/home')
          }}>Submit 🚀</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
