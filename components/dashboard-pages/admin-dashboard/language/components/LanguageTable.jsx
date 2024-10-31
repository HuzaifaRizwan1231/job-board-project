import Link from "next/link.js";
import Image from "next/image.js";
import languages from "@/data/languages";

const LanguageTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Languages</h4>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Language Name</th>
                  <th>Language Key</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {languages.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.languageName}</td>
                    <td>{item.languageKey}</td>
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

export default LanguageTable;
