import React from "react";
import "./CSS/aboutus.css";
import mitul from "./images/mitul.jpg";
import ayush from "./images/ayush.jpeg";
import mudit from "./images/mudit.jpeg";

export default function AboutUs() {
  return (
    <div className="section">
      <div className="head">ABOUT US</div>
      <div className="about">
        <p className="aboutHostel">
          <span>HOSTEL PAL</span> is an initial software platform that is
          basically an hostel management system which will make every hostel
          needs easy and simple. <span>HOSTEL PAL</span> will save time for
          students as well as for management.
        </p>
      </div>

      <div className="creators">
        <a
          href="https://www.instagram.com/mitul_jain.99"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personImage" style={akashImg}>
            <img src={mitul} alt="akash" />
          </div>
          <div className="personDetail">
            <p className="name">MITUL JAIN</p>
            <p className="collageId">20103103</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/mudit_garg904/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personImage othPersonImg">
            <img src={mudit} alt="mudit" />
          </div>
          <div className="personDetail">
            <p className="name">MUDIT</p>
            <p className="collageId">20103109</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/imaayushmittal/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator">
          <div className="personImage othPersonImg">
            <img src={ayush} alt="ayush" />
          </div>
          <div className="personDetail">
            <p className="name">AYUSH MITTAL</p>
            <p className="collageId"> 20103073</p>
          </div>
        </a>
        
      </div>
    </div>
  );
}

const akashImg = {
  width: "80px",
  marginBottom: "5px",
};
