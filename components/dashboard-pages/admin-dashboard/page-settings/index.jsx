import BreadCrumb from "../../BreadCrumb";
import MenuToggler from "../../MenuToggler";
import PageSettingsForm from "./components/PageSettingsForm";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Page Settings" />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <PageSettingsForm />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
