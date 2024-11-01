import FAQCategoryTable from "./components/FAQCategoryTable";
import TopCardBlock from "./components/TopCardBlock";
import MenuToggler from "@/components/dashboard-pages/MenuToggler";
import BreadCrumbWithButton from "@/components/dashboard-pages/BreadCrumbWithButton";

const index = () => {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="FAQ Category"
        icon="las la-plus"
        buttonText="Create a category"
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
            <FAQCategoryTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
};

export default index;
