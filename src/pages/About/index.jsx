import profile from "../../assets/profile.png";
import "./About.css";
export default function About() {
  return (
    <div className="about_content-wrapper">
      <div className="wrapper-left">
        <div className="spacer"></div>
        <p className="description">
          The To-Do App is a React Single Page Application (SPA) designed for
          efficient task management. It features a persistent navbar and footer,
          a sidebar for easy navigation, and a dynamic items list sourced from
          JSON data. Users can create, update, and delete tasks seamlessly. Each
          task has a detailed page, and conditional rendering reflects task
          statuses accurately. The about page introduces the project and team
          members, while a not found page handles invalid URLs gracefully.
        </p>

        <div className="socials-wrapper">
          <div className="about_socials">
            <h3>github</h3>
            <a target="_blank" href="https://github.com/yungsimeon">
              https://github.com/yungsimeon
            </a>
          </div>

          <div className="about_socials">
            <h3>LinkedIn</h3>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/simon-schubert-b7a372261/"
            >
              https://www.linkedin.com/in/simon-schubert
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper-right">
        <div className="profile-wrapper">
          <div className="fade-in-slide-in-2">
            <h2 className="simon">Simon</h2>
          </div>

          <div className="fade-in-slide-in">
            <h2 className="schubert">Schubert</h2>
          </div>

          <img src={profile} />
        </div>
      </div>
    </div>
  );
}
