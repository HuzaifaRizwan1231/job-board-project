import Image from "next/image.js";

const KycRequestsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>KYC Requests</h4>
        <div className="d-flex">
          <input
            type="text"
            className="form-control rounded-end-0 border-secondary border-end-0"
            placeholder="Search by invoice or user"
            aria-label="Search"
          />
          <button
            type="submit"
            className="btn btn-outline-secondary rounded-start-0"
          >
            <span className="la la-search"></span>
          </button>
        </div>
        <div class="input-group">
          <select
            style={{ width: "30%" }}
            disabled=""
            class="select text-secondary border border-1 border-secondary rounded-start-2 px-2"
          >
            <option value="">Action</option>
            <option value="delete">Delete</option>
          </select>
          <button disabled="" class="btn btn-outline-secondary">
            Go
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
                  <th>Request ID</th>
                  <th>Method</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Documents</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input type="checkbox" className="checkbox" />
                    </td>
                    <td>#{item.requestId}</td>
                    <td>{item.method}</td>
                    <td className="text-nowrap">{item.company}</td>
                    <td className="text-warning">{item.status}</td>
                    <td>{item.documents}</td>
                    <td className="text-nowrap">{item.createdAt}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View">
                              <span className="la la-eye" />
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
    requestId: 1,
    method: "ID Card",
    company: "Card	Occaecat et sed et i",
    status: "Pending",
    documents: 2,
    createdAt: "15 January 2024",
  },
];

export default KycRequestsTable;
