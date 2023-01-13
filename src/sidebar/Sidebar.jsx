import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <img className="sidebarImage"
          src="https://c4.wallpaperflare.com/wallpaper/599/374/514/jujutsu-kaisen-yuji-itadori-sukuna-anime-anime-boys-hd-wallpaper-preview.jpg"
          alt="pic"
        />
        <br/>
        <span className="sidebarTitle">About me</span>
        <p className="sidebarText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Anime</li>
          <li className="sidebarListItem">Foodie</li>
          <li className="sidebarListItem">Lifestyle</li>
          <li className="sidebarListItem">Technology</li>
          <li className="sidebarListItem">Gaming</li>
          <li className="sidebarListItem">Fictional</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow me</span>
        <div className="sidebarSocial">
          <i className="socialIcon fa-brands fa-github"></i>
          <i className="socialIcon fa-brands fa-instagram"></i>
          <i className="socialIcon fa-brands fa-twitter"></i>
          <i className="socialIcon fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
}
