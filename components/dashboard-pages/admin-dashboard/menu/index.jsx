import MobileMenu from "../../../header/MobileMenu";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardAdminSidebar from "../../../header/DashboardAdminSidebar";
import CopyrightFooter from "../../CopyrightFooter";
import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";
import TopCardBlock from "./components/TopCardBlock";
import MenuTable from "./components/MenuTable";

const index = () => {
  return (
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
          <BreadCrumbWithButton
            title="Menu"
            buttonText="Create Menu"
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
                <MenuTable />
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
    // End page-wrapper
  );
};

export default index;
