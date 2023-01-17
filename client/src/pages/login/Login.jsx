import { Context } from "../../context/Context";
import axios from "axios";
import { useContext, useRef } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <h1 className="loginTitle">LOGIN</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="loginLabel">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="loginInput"
          ref={userRef}
        />
        <label className="loginLabel">Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>LOGIN</button>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </button>
      </form>
    </div>
  );
}
