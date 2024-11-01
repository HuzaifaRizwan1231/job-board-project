import Link from "next/link.js";
import Image from "next/image.js";

const MessagesTable = () => {
  const messages = [
    {
      id: 1,
      serviceProviderName: "Payoneer",
      serviceProviderAvatar: "/images/resource/company-1.png",
      clientName: "Shani Milar",
      replies: 24,
    },
  ];
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Messages</h4>

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
                  <th>Service Provider</th>
                  <th>Client</th>
                  <th>Created At</th>
                  <th>Replies</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {messages.slice(0, 4).map((item) => (
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
                                src={item.serviceProviderAvatar}
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
                    <td>{item.clientName}</td>
                    <td>29 Dec, 2023</td>
                    <td>{item.replies}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View">
                              <span className="la la-external-link-alt"></span>
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

export default MessagesTable;
