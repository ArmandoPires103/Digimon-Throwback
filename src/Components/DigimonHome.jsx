import React from "react";
import "/CSS/DigimonHome.css"; // Add your CSS file path

const DigimonHome = () => {
    return (
        <div className="digivice-container">
          <div className="digivice-container__cut digivice-container__cut--left-top">
            <div className="wireless"></div>
          </div>
    
          <div className="digivice-container__cut digivice-container__cut--left-bottom"></div>
          <div className="digivice-container__cut digivice-container__cut--right-top"></div>
          <div className="digivice-container__cut digivice-container__cut--right-bottom"></div>
    
          <div className="digivice">
            <label className="digivice__button digivice__button--digital" htmlFor="toggle"></label>
            <div className="digivice__button digivice__button--a"></div>
            <div className="digivice__button digivice__button--b"></div>
    
            <div className="digivice__detail digivice__detail--h digivice__detail--left"></div>
            <div className="digivice__detail digivice__detail--h digivice__detail--right-a"></div>
            <div className="digivice__detail digivice__detail--h digivice__detail--right-b"></div>
            <div className="digivice__detail digivice__detail--v digivice__detail--top-left"></div>
            <div className="digivice__detail digivice__detail--v digivice__detail--top-right"></div>
            <div className="digivice__detail digivice__detail--v digivice__detail--bottom-left"></div>
            <div className="digivice__detail digivice__detail--v digivice__detail--bottom-right"></div>
    
            <div className="digivice__circle">
              <div className="digivice__inner-circle">
                <input type="checkbox" id="toggle" />
                <div className="digivice__screen"></div>
              </div>
            </div>
            
          </div>
        </div>
      );
    };

export default DigimonHome;
