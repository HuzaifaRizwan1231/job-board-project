const FAQCategoryTable = () => {
  const faqCategories = [
    {
      id: 1,
      name: "Account",
      slug: "account",
      language: "en",
    },
  ];
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Categories</h4>
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
                  <th>Slug</th>
                  <th>Language</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {faqCategories.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.language}</td>
                    <td className="status">Active</td>
                    <td>9-Jan-2024</td>
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

export default FAQCategoryTable;
