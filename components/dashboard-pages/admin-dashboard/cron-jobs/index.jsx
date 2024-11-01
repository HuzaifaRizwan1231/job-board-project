import React from "react";
import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";
import CronJobList from "./components/CronJobList";
import BreadCrumb from "../../BreadCrumb";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Cron Jobs" />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <CronJobList />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
