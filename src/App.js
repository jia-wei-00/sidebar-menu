import React, { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faEnvelopeOpenText,
  faCircleQuestion,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let bg = document.querySelector("body");

    if (active === "home") {
      bg.style.background = "#f53b57";
    } else if (active === "profile") {
      bg.style.background = "#3c40c6";
    } else if (active === "message") {
      bg.style.background = "#05c46b";
    } else if (active === "help") {
      bg.style.background = "#0fbcf9";
    } else if (active === "settings") {
      bg.style.background = "#ffa801";
    }
  }, [active]);

  return (
    <div className="navigation">
      <ul>
        <li
          className={active === "home" ? "list active" : "list"}
          onClick={() => setActive("home")}
        >
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faHouseUser} />
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li
          className={active === "profile" ? "list active" : "list"}
          onClick={() => setActive("profile")}
        >
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="title">Profile</span>
          </a>
        </li>
        <li
          className={active === "message" ? "list active" : "list"}
          onClick={() => setActive("message")}
        >
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </span>
            <span className="title">Message</span>
          </a>
        </li>
        <li
          className={active === "help" ? "list active" : "list"}
          onClick={() => setActive("help")}
        >
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </span>
            <span className="title">Help</span>
          </a>
        </li>
        <li
          className={active === "settings" ? "list active" : "list"}
          onClick={() => setActive("settings")}
        >
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span className="title">Settings</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

export default App;
