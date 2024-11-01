import React from "react";
import MenuToggler from "../../MenuToggler";
import SeoSettingsTable from "./components/SeoSettingsTable";
import BreadCrumb from "../../BreadCrumb";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Seo Settings" />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <SeoSettingsTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
