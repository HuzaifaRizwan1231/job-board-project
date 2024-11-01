import BreadCrumb from "../../BreadCrumb";
import MenuToggler from "../../MenuToggler";
import MessagesTable from "./components/MessagesTable";
import TopCardBlock from "./components/TopCardBlock";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Messages" />
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
            <MessagesTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
