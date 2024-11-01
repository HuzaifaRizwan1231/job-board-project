import React from "react";
import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";
import StepsTable from "./components/StepsTable";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Steps"
        buttonText="Add New Step"
        icon="las la-plus"
      />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <StepsTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
