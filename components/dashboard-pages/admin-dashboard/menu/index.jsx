import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";
import TopCardBlock from "./components/TopCardBlock";
import MenuTable from "./components/MenuTable";

const index = () => {
  return (
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
  );
};

export default index;
