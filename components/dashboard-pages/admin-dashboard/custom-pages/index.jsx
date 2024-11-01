import React from "react";
import TopCardBlock from "./components/TopCardBlock";
import MenuToggler from "../../MenuToggler";
import CustomPagesTable from "./components/CustomPagesTable";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Custom Page"
        buttonText="Create a page"
        icon="las la-plus"
      />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <TopCardBlock />
      </div>

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <CustomPagesTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
