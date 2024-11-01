import Link from "next/link.js";
import Image from "next/image.js";
import partners from "@/data/partners";

const PartnersTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Partners</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Url</th>
                  <th>Type</th>
                  <th>Top Client</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {partners.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <Image
                                width={50}
                                height={49}
                                src={item.image}
                                alt="logo"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.url}</td>
                    <td>{item.type}</td>
                    <td>{item.topClient}</td>
                    <td className="status">Active</td>
                    <td>22 Jan 2024</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit">
                              <span className="la la-pencil"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default PartnersTable;
