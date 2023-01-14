import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div>
      <div className="top">
        <div className="topLeft">LOGO</div>
        <div className="topCenter">
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
        <div className="topRight">
          <div className="searchBar">
            <span className="material-symbols-outlined searchIcon">search</span>
          </div>
          {user ? (
            <Link className="link" to="/settings"><img
              className="topImage"
              src="https://yt3.ggpht.com/yti/AJo0G0kt1B7Ml7UZ9EufDP0tcilCXfI3pgFKFDhOUj7cIg=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="profilepic"
            ></img></Link>
          ) : (
            <ul className="navBar">
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
