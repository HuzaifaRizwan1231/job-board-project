const CustomPagesTable = () => {
  return (
    <div className="tabs-box">
      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>URL</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td className="text-nowrap">{item.url}</td>
                    <td className="status">{item.status}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit Page">
                              <span className="la la-edit"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Page">
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

const data = [
  {
    id: 1,
    title: "Privacy Policy",
    url: "https://jobi.thedevstation.com/page/privacy-policy",
    status: "Active",
    createdAt: "1 year ago",
  },
  {
    id: 2,
    title: "Terms and Conditions",
    url: "https://jobi.thedevstation.com/page/terms-and-conditions",
    status: "Active",
    createdAt: "1 year ago",
  },
];

export default CustomPagesTable;
