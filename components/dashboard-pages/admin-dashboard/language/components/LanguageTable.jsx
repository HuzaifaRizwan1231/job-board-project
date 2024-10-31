import React from "react";
import data from "@/data/language";

export default function LanguageTable() {
  return (
    <div className="tabs-box">
      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Language Name</th>
                  <th>Language key</th>
                  <th />
                  <th />
                  <th />
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.key}</td>
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
                          <li>
                            <button data-text="Delete Language">
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
}
