import React from "react";
import MenuToggler from "../../MenuToggler";
import BreadCrumb from "../../BreadCrumb";
import TestimonialTable from "./components/TestimonialTable";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Testimonials" />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <TestimonialTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
