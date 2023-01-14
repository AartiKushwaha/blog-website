import { Link } from "react-router-dom";
import "./topbar.css";
import { useState } from "react";

export default function TopBar() {
  const user = true;
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div>
      <div className="top">
        <div className="topLeft"><Link className="link" to="/">LOGO</Link></div>
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
            <li className="listItem">{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight corner">
          <div className="searchBar">
            <span className="material-symbols-outlined searchIcon">search</span>
          </div>
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImage"
                src="https://yt3.ggpht.com/yti/AJo0G0kt1B7Ml7UZ9EufDP0tcilCXfI3pgFKFDhOUj7cIg=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="profilepic"
              ></img>
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
