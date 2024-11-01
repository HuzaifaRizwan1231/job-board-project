import React from "react";
import MenuToggler from "../../MenuToggler";
import BreadCrumbWithButton from "../../BreadCrumbWithButton";
import BlogsTable from "./components/BlogsTable";

export default function index() {
  return (
    <div className="dashboard-outer">
      <BreadCrumbWithButton
        title="Blogs"
        buttonText="Create a blog post"
        icon="las la-plus"
      />
      {/* breadCrumb */}

      <MenuToggler />
      {/* Collapsible sidebar button */}

      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Ls widget --> */}
          <div className="ls-widget">
            <BlogsTable />
          </div>
        </div>
      </div>
      {/* End .row */}
    </div>
  );
}
