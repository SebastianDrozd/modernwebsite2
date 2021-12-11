import React, { useEffect, useState } from "react";
import CanvasLayout from "../../components/canvas/CanvasLayout";
import Navbar from "../navbar/Navbar";
import "./Header.css";
const Header = () => {
  
 
  return (
    <>
      <div id="top" className="header-main-outer-div">
        
          <div className="header-canvas-wrapper">
              <CanvasLayout/>
          </div>
          <Navbar/>
          <div className="header-text-stuff">
              <p id='sub'  className="header-top-text animate__animated animate__fadeInUp">Enable new exeperiences</p>
              <div style={{display: 'flex',justifyContent: 'flex-start',alignItems: 'center'}}>
              <p id ="yo" className="header-top-Main">Fuel your endless imagination</p>
              <div id="code" style={{display: 'flex'}}>
              <p   className=" animate__animated animate__fadeInUp" style={{fontSize:'130px',color: 'white'}}>{"< "}</p>
              <p className=" animate__animated animate__fadeInUp" style={{fontSize:'130px',color: 'rgb(23, 255, 243)'}}>{" />"}</p>
              </div>
              </div>
              <button className="header-button">Get Started</button>
              <section class="example example--1">
    <span class="scroll-icon animate__animated animate__fadeInUp">
      <span class="scroll-icon__wheel-outer">
        <span class="scroll-icon__wheel-inner"></span>
      </span>
    </span>
    
  </section>
          </div>
          <div class='icon-scroll'></div>
      </div>
    </>
  );
};

export default Header;
