import React from "react";
import "./CSS/dashboard.css";

import bunkerBed from "./images/bunkerbed.png";
import hangout from "./images/hangoutTexting.svg";
import complaints from "./images/complaintSvg.svg";
import service from "./images/service.svg";
import service2 from "./images/allcomplaint.png";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="section">
      <div className="box">
        <div className="text">
          <p className="p1">WELCOME TO HOSTEL PAL</p>
          <p className="p2">ALL HOSTEL NEEDS ON YOUR FINGER TIPS</p>
        </div>
        <img
          src={bunkerBed}
          alt="Bunker Bed"
          className="image"
          style={{ width: "30%" }}
        />
      </div>
      <div id="options">
        <Link to="hangout" className="option">
          <img src={hangout} id="dbhangout" alt="hangout texting" />
          <p>HANGOUT</p>
        </Link>
        <Link to="complaints" className="option">
          <img src={complaints} id="dbcomplaint" alt="complaints" />
          <p>COMPLAINTS</p>
        </Link>
        <Link to="services" className="option">
          <img src={service} id="dbservice" alt="services" />
          <p>SERVICES</p>
        </Link>
        <Link to="canteen" className="option">
          <img src={service2} id="dbservice" alt="canteen" />
          <p>ALL COMPLAINTS</p>
        </Link>
      </div>
    </div>
  );
}
