import MenuToggler from "../../../MenuToggler";
import BreadCrumbWithButton from "../../../BreadCrumbWithButton";
import FAQTable from "./components/FAQTable";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="FAQ"
        icon="las la-plus"
        buttonText="Create FAQ"
      />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <FAQTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
