import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "../../assets/error.json";
import "./Error.css";

export default function Error() {
  return (
    <div className="animation-wrapper">
      <Player
        autoplay
        loop
        src={errorAnimation}
        style={{ height: "50vh", width: "50vw" }}
      />
    </div>
  );
}
