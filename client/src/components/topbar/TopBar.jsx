import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <Link className="link" to="/">
            LOGO
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "topCenter expanded" : "topCenter"}>
          <ul className="navBar">
            <li className="listItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="listItem">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="listItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="listItem">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="hidden">
              {user ? (
                <Link to="/settings">
                  <img className="topImage" src={PF + user.profilePic} alt="" />
                </Link>
              ) : null}
            </li>
            <li className="listItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight corner">
          {user ? (
            <Link to="/settings">
              <img className="topImage" src={PF + user.profilePic} alt="" />
            </Link>
          ) : (
            <ul className="navBar signin">
              <li className="listItem">
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="listItem">
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
