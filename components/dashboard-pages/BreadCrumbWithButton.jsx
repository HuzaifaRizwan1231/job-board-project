import React from "react";

const BreadCrumbWithButton = ({ title = "", buttonText = "", icon = "" }) => {
  return (
    <div className="upper-title-box">
      <div className="d-flex justify-content-between">
        <h3>{title}</h3>
        <button className="btn-style-one theme-btn small d-flex gap-1 align-items-center">
          <i className={icon}></i>
          {buttonText}
        </button>
      </div>

      <div className="text">Ready to jump back in?</div>
    </div>
  );
};

export default BreadCrumbWithButton;
