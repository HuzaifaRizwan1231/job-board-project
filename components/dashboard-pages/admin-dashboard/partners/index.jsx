import MenuToggler from "../../MenuToggler";
import TopCardBlock from "./components/TopCardBlock";
import PartnersTable from "./components/PartnersTable";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Partners"
        buttonText="Create a Partner"
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
            <PartnersTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
