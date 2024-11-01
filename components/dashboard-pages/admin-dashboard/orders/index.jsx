import BreadCrumb from "../../BreadCrumb";
import MenuToggler from "../../MenuToggler";
import TopCardBlock from "../orders/components/TopCardBlock";
import OrdersTable from "./components/OrdersTable";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Orders" />
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
            <OrdersTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
