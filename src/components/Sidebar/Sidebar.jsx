import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar-wrapper">
      <nav>
        <NavLink className="navlink" to="/">
          <div className="sidebar_page-card">
            <p className="sidebar-text">01</p>
            <p className="sidebar-text">Home</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/about">
          <div className="sidebar_page-card">
            <p className="sidebar-text">02</p>
            <p className="sidebar-text">About</p>
          </div>
        </NavLink>
      </nav>
    </aside>
  );
}
