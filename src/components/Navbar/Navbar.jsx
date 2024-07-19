import navAnimation from "../../assets/icon.json";

import { Player } from "@lottiefiles/react-lottie-player";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="icon-wrapper">
        <Player
          autoplay
          loop
          src={navAnimation}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
      <h2 className="nav-heading"> BU(yeg)GS</h2>
    </nav>
  );
}
