import "./Cover.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { useEffect } from "react";
import coverAnimation from "../../assets/cover.json";

export default function Cover() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  const handleClick = () => {
    const coverElement = document.querySelector(".cover");
    const parentElement = document.getElementById("parent");
    if (coverElement) {
      coverElement.classList.add("hidden");
      setTimeout(() => {
        setIsVisible(false);
        parentElement.removeChild(coverElement);
      }, 3000);
    }
  };

  return (
    <div id="parent">
      <div className="cover" onClick={handleClick}>
        <div className="animation-wrapper">
          <Player autoplay loop src={coverAnimation} />
        </div>
      </div>
    </div>
  );
}
