import React from "react";
import MenuToggler from "../../MenuToggler";
import BreadCrumb from "../../BreadCrumb";
import AboutUsForm from "./components/AboutUsForm";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="About Us" />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <AboutUsForm />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
