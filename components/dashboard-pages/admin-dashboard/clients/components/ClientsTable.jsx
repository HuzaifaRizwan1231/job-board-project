import Link from "next/link.js";
import clients from "@/data/clients.js";
import Image from "next/image.js";

const ClientsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Applied Jobs</h4>

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
                  <th>Candidate</th>
                  <th>Designation</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {clients.slice(0, 4).map((item) => (
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
                                src={item.avatar}
                                alt="avatar"
                                className="rounded-circle"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.name}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                {item.experience}
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                {item.location}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.designation}</td>
                    <td className="status">Active</td>
                    <td>Dec 5, 2020</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Edit Aplication">
                              <span className="la la-edit"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
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

export default ClientsTable;
