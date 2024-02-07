//
import { useState, useEffect } from "react";

import "../Styles/header.css";

export default function Header() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let currentDate = new Date();
      let time = currentDate.toLocaleTimeString();
      setTime(time);
    }, 1000);
  }, [time]);

  return (
    <header>
      {/* <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="#">
              {"Home".toUpperCase()}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {"About".toUpperCase()}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {"Contact".toUpperCase()}
            </a>
          </li>
        </ul>
      </nav> */}
      <div className="sidebar_time">{time}</div>
    </header>
  );
}
