import React from "react";
import MenuToggler from "../../MenuToggler";
import LanguageTable from "./components/LanguageTable";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Language"
        buttonText="Create a Language"
        icon="las la-plus"
      />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <LanguageTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
