import "./topbar.css";

export default function TopBar() {
  return (
    <div>
      <div className="top">
        <div className="topLeft">LOGO</div>
        <div className="topCenter">
          <ul className="navBar">
            <li className="listItem">HOME</li>
            <li className="listItem">ARTICLES</li>
            <li className="listItem">WRITE</li>
            <li className="listItem">CONTACT</li>
          </ul>
        </div>
        <div className="topRight">
          <div className="searchBar">
            <span className="material-symbols-outlined searchIcon">search</span>
          </div>

          <img
            className="topImage"
            src="https://yt3.ggpht.com/yti/AJo0G0kt1B7Ml7UZ9EufDP0tcilCXfI3pgFKFDhOUj7cIg=s88-c-k-c0x00ffffff-no-rj-mo"
            alt="profilepic"
          ></img>
        </div>
      </div>
    </div>
  );
}
