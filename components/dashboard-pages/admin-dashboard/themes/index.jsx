import BreadCrumb from "../../BreadCrumb";
import MenuToggler from "../../MenuToggler";
import ThemesContainer from "./components/ThemesContainer";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumb title="Themes" />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <ThemesContainer />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
