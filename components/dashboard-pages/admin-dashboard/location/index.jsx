import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";
import LocationTable from "./components/LocationTable";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Locations"
        icon="las la-plus"
        buttonText="Add New Location"
      />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <LocationTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
