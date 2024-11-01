import React from "react";
import TopCardBlock from "./components/TopCardBlock";
import MenuToggler from "../../MenuToggler";
import KycRequestsTable from "./components/KycRequestsTable";
import BreadCrumb from "../../BreadCrumb";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="KYC Requests" />
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
            <KycRequestsTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
