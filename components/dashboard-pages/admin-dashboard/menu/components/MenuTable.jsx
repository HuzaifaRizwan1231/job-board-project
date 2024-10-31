import Link from "next/link.js";
import Image from "next/image.js";
import partners from "@/data/partners";
import menuPageData from "@/data/menuPageData";

const MenuTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Menu</h4>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Menu Name</th>
                  <th>Position</th>
                  <th>Language</th>
                  <th>Status</th>
                  <th>Last Update</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {menuPageData.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.position}</td>
                    <td>{item.language}</td>
                    <td className="status">Active</td>
                    <td>1 Year ago</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Manage">
                              <span className="la la-list"></span>
                            </button>
                          </li>
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

export default MenuTable;
