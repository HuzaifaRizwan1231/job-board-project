import React from "react";
import TopCardBlock from "./components/TopCardBlock";
import MenuToggler from "../../MenuToggler";
import BreadCrumb from "../../BreadCrumb";
import ClientsTable from "./components/ClientsTable";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Clients" />
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
            <ClientsTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
