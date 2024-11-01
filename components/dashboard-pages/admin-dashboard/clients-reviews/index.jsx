import BreadCrumb from "../../BreadCrumb";
import MenuToggler from "../../MenuToggler";
import TopCardBlock from "./components/TopCardBlock";
import ClientsReviewsTable from "./components/ClientsReviewsTable";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Client Reviews" />
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
            <ClientsReviewsTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
