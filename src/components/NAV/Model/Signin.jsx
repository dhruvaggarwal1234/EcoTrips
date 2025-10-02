import React, { useState } from "react";
import "./Signin.css";
import logo from "../Img/logo.png";
import Login from "./Login.jsx";
import Create from "./Create.jsx";

function Signin({ OnClose }) {
  
  const [activeTab, setActiveTab] = useState("create");

  return (
    <>
      <div className="body">
        <div className="Main_sign">
          <div className="div1">
            <div className="div1_main">
              <div className="Sign_logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="Sign_Slogan"> SignUp now to join the club of:</div>
              <div className="Sign_box_Slogan">
                EcoTrips Happy Travelers & meet new adventures
              </div>

              <div className="nav-container">
                <button className="nav-arrow" aria-label="previous">
                  &lt;
                </button>
                <span className="nav-dot" />
                <span className="nav-dot" />
                <span className="nav-dot" />
                <button className="nav-arrow" aria-label="next">
                  &gt;
                </button>
              </div>
            </div>
          </div>

          <div className="div2">
            <div className="Head_div">
              <div className="Container_tab">
                <button
                  className={`Create_button ${activeTab === "create" ? "active" : ""}`}
                  onClick={() => setActiveTab("create")}
                  aria-pressed={activeTab === "create"}
                >
                  Create your Account
                </button>

                <button
                  className={`Login_button_tab ${activeTab === "login" ? "active" : ""}`}
                  onClick={() => setActiveTab("login")}
                  aria-pressed={activeTab === "login"}
                >
                  Login to Existing Account
                </button>
              </div>

              {/* Example conditional content — replace with your real forms */}
              <div className="tab-content">
                {activeTab === "create" ? (
                  <Create/>
                ) : (
                  <Login/>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="Close_div">
          <button className="Closebutton" onClick={OnClose} aria-label="close">
            &times;
          </button>
        </div>
      </div>
    </>
  );
}

export default Signin;
