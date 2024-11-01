import React from "react";
import MenuToggler from "../../MenuToggler";
import BreadCrumb from "../../BreadCrumb";
import CreateKycMethod from "./components/CreateKycMethod";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton title="Create KYC Method" buttonText="Back to list" icon="la la-list-ul"/>
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <CreateKycMethod />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
