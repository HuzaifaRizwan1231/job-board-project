import React from "react";

export default function SeoSettingsTable() {
  return (
    <div className="tabs-box">
      <div className="widget-title"></div>
      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Meta Title</th>
                  <th />
                  <th />
                  <th />
                  <th />
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.page}</td>
                    <td>{item.metaTitle}</td>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit Language">
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
}

const data = [
  { id: 1, page: "home", metaTitle: "Home" },
  { id: 2, page: "blog", metaTitle: "Blogs" },
  { id: 3, page: "about", metaTitle: "About Us" },
  { id: 4, page: "pricing", metaTitle: "Pricing" },
  { id: 5, page: "contact", metaTitle: "Contact Us" },
  { id: 6, page: "faq", metaTitle: "Faq" },
  { id: 7, page: "team", metaTitle: "Our Team" },
  { id: 8, page: "features", metaTitle: "Features" },
  { id: 9, page: "how its works", metaTitle: "How it Works" },
  { id: 10, page: "login", metaTitle: "Sign in" },
  { id: 11, page: "register", metaTitle: "Sign Up" },
  { id: 12, page: "job list", metaTitle: "Jobs" },
  { id: 13, page: "candidate list", metaTitle: "Candidates" },
  { id: 14, page: "companies", metaTitle: "Companies" },
];
