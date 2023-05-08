import React, { useState } from "react";
import "./App.css";

import menu from "./components/images/hamburgerMenu.png";
import error404 from "./components/images/error404.svg";
import signInFirst from "./components/images/signInFirst.svg";

import SideNavigation from "./components/SideNavigation.js";
import Header from "./components/Header.js";
import SignIn from "./components/SignIn.js";
import AfterSignedIn from "./components/AfterSignedIn.js";
import Dashboard from "./components/Dashboard.js";
import Services from "./components/Services.js";
import Complaints from "./components/Complaints.js";
import SendMail from "./components/SendComplaint.js";
import Notice from "./components/Notice.js";
import Hangout from "./components/Hangout.js";
import AboutUs from "./components/AboutUs.js";
import UserInfo from "./components/UserInfo.js";
import NotFound from "./components/NotFound.js";
import ShowComplaint from "./components/ShowComplaint.js";
import ResultFetch from "./components/ResultFetch.js";
import Canteen from "./components/Canteen.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./components/Firebase.js";

function App() {
  const [isUserSigned, setIsUserSigned] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) setIsUserSigned(true);
    else {
      setIsUserSigned(false);
    }
  });

  function showNav() {
    const navBar = document.querySelector(".hamburgerMenu");
    navBar.addEventListener("click", function () {
      document.querySelector(".sidebar").classList.toggle("activeNav");
    });
  }
  const mailIds={
    "wifiemails":"mituljain85@gmail.com",
    "roomemails":"jainmitul84@gmail.com",
    "carptemails":"simplifiedgeek004@gmail.com",
    "elecemails":"mitulishika@gmail.com"
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img
            src={menu}
            alt="menu"
            className="hamburgerMenu"
            onClick={showNav}
          />
          <Header />
        </header>
        <div className="main">
          <div className="sidebar">
            <nav>
              <SideNavigation />
            </nav>
            <div className="signin">
              {!isUserSigned ? <SignIn /> : <AfterSignedIn />}
            </div>
          </div>
          <section>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="showcomplaints" element={<ShowComplaint />} />
              <Route path="resultfetch" element={<ResultFetch />} />
              <Route path="canteen" element={<Canteen />} />
              <Route path="notice" element={<Notice />} />
              <Route
                path="services"
                element={
                  <Services isUserSigned={isUserSigned} email={mailIds.roomemails} />
                }
              />
              <Route path="complaints" element={<Complaints />} />
              <Route
                path="complaints/wifiComplaint"
                element={
                  <SendMail
                    isUserSigned={isUserSigned}
                    complaintHead="Wifi"
                    email={mailIds.wifiemails}
                  />
                }
              />
              <Route
                path="complaints/electricityComplaint"
                element={
                  <SendMail
                    complaintHead="Electricity"
                    isUserSigned={isUserSigned}
                    email={mailIds.elecemails}
                    category={["Table Lamp", "Switch", "Light Bulb", "Fan"]}
                  />
                }
              />
              <Route
                path="complaints/carpenterComplaint"
                element={
                  <SendMail
                    complaintHead="Captenter"
                    isUserSigned={isUserSigned}
                    email={mailIds.carptemails}
                    category={[
                      "Drawer",
                      "Chair",
                      "Study Table",
                      "Almirah",
                      "Handle",
                    ]}
                  />
                }
              />
              <Route
                path="hangout"
                element={
                  isUserSigned ? (
                    <Hangout />
                  ) : (
                    <NotFound errorImage={signInFirst} />
                  )
                }
              />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="userInfo" element={<UserInfo />} />
              <Route path="*" element={<NotFound errorImage={error404} />} />
            </Routes>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
