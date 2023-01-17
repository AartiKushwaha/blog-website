import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <h1 className="registerTitle">REGISTER</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label className="registerLabel">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="registerInput"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="registerLabel">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="registerInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="registerLabel">Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </button>
      </form>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
