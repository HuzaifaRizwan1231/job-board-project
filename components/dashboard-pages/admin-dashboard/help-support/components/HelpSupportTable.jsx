import Link from "next/link.js";
import Image from "next/image.js";
import supportTickets from "@/data/supportTickets.js";

const HelpSupportTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Tickets</h4>

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
                  <th>Ticket No</th>
                  <th>Subject</th>
                  <th>Converstations</th>
                  <th>Status</th>
                  <th>User</th>
                  <th>Created At</th>
                  <th>Ticket</th>
                </tr>
              </thead>

              <tbody>
                {supportTickets.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    {/* <td>
                      {/* <!-- Job Block --> 
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <Image
                                width={50}
                                height={49}
                                src={item.logo}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                Segment
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                London, UK
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td> */}
                    <td>{item.ticketNo}</td>
                    <td>{item.subject}</td>
                    <td>{item.conversations}</td>
                    <td className="status">{item.status}</td>
                    <td>{item.user}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Ticket">
                              <span className="la la-eye"></span>
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

export default HelpSupportTable;
