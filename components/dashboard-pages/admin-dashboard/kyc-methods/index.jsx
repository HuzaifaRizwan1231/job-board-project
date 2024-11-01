import React from "react";
import TopCardBlock from "./components/TopCardBlock";
import MenuToggler from "../../MenuToggler";
import KycMethodTable from "./components/KycMethodTable";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="KYC Methods"
        buttonText="Create New Method"
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
            <KycMethodTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
