import Link from "next/link.js";
import Image from "next/image.js";

const KycMethodTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <div className="d-flex gap-2">
          <select className="select">
            <option value="">Select Action</option>
            <option value="delete">Delete Permanently</option>
          </select>
          <button className="btn-style-one" type="submit" disabled>
            Submit
          </button>
        </div>
      </div>

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" className="checkbox" />
                  </th>
                  <th>Method</th>
                  <th>Total Used</th>
                  <th>Accept Attach</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input type="checkbox" className="checkbox" />
                    </td>
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
                            <h4>{item.method}</h4>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.totalUsed}</td>
                    <td className="status">{item.acceptPath}</td>
                    <td className="text-nowrap">{item.createdAt}</td>
                    <td className="status">{item.status}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit">
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

const data = [
  {
    id: 1,
    logo: "/images/resource/payment-gateway-logo/paypal.png",
    method: "ID Card",
    totalUsed: 1,
    acceptPath: "Yes",
    createdAt: "14 Dec, 2023",
    status: "Active",
  },
  {
    id: 2,
    logo: "/images/resource/payment-gateway-logo/paypal.png",
    method: "Passport",
    totalUsed: 3,
    acceptPath: "Yes",
    createdAt: "15 Dec, 2023",
    status: "Active",
  },
];

export default KycMethodTable;
