import React from "react";
import MenuToggler from "../../MenuToggler";
import CurrencyTable from "./components/CurrencyTable";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Currency"
        buttonText="Create a Currency"
        icon="las la-plus"
      />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <CurrencyTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
