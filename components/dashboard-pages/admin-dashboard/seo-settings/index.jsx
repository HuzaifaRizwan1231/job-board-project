import React from "react";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import MobileMenu from "@/components/header/MobileMenu";
import DashboardCandidatesHeader from "@/components/header/DashboardCandidatesHeader";
import DashboardAdminSidebar from "@/components/header/DashboardAdminSidebar";
import LoginPopup from "@/components/common/form/login/LoginPopup";
import SeoSettingsTable from "./components/SeoSettingsTable";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";
import BreadCrumb from "../../BreadCrumb";

export default function index() {
  return (
    <>
      <div className="page-wrapper dashboard">
        <span className="header-span"></span>
        {/* <!-- Header Span for hight --> */}

        <LoginPopup />
        {/* End Login Popup Modal */}

        <DashboardCandidatesHeader />
        {/* End Header */}

        <MobileMenu />
        {/* End MobileMenu */}

        <DashboardAdminSidebar />
        {/* <!-- End Candidates Sidebar Menu --> */}

        {/* <!-- Dashboard --> */}
        <section className="user-dashboard">
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
          {/* End dashboard-outer */}
        </section>
        {/* <!-- End Dashboard --> */}

        <CopyrightFooter />
        {/* <!-- End Copyright --> */}
      </div>
      {/* // End page-wrapper */}
    </>
  );
}