import Link from "next/link.js";
import Image from "next/image.js";
import projects from "@/data/projects";

const ProjectsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Projects</h4>

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
                  <th>Name</th>
                  <th>Service Provider</th>
                  <th>Service</th>
                  <th>Category</th>
                  <th>Created At</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {projects.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <Image
                                width={50}
                                height={49}
                                src={item.img}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.serviceProviderName}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.service}</td>
                    <td>{item.category}</td>
                    <td>Dec 5, 2020</td>
                    <td className="status">Active</td>
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

export default ProjectsTable;
