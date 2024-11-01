import Link from "next/link.js";
import data from "@/data/paymentGateway.js";
import Image from "next/image.js";

const PaymentGatewayTable = () => {
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
                  <th>Name</th>
                  <th>Charge</th>
                  <th>Currency</th>
                  <th>Gateway Status</th>
                  <th>Payment Mode</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
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
                                src={item.logo}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.name}
                              </Link>
                            </h4>
                            <strong
                              style={{ fontSize: 12 }}
                              className="text-nowrap"
                            >
                              Limit : 1.00 - 5,000.00
                            </strong>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.charge}</td>
                    <td>{item.currency}</td>
                    <td className="status">{item.status}</td>
                    <td>{item.mode}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit Aplication">
                              <span className="la la-edit"></span>
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

export default PaymentGatewayTable;
