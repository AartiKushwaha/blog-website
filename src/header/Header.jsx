import "./header.css";
import video from "./bgVideo.mp4";

export default function Header() {
  return (
    <div className="header">
      <video playsInline autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>
          PETITE
          <br />
          PERSPECTIVES
        </h1>
      </div>
    </div>
  );
}
