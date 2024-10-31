import Link from "next/link.js";
import Image from "next/image.js";
import locations from "@/data/locations";

const LocationTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Locations</h4>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Location Name</th>
                  <th>States</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {locations.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td>{item.locationName}</td>
                    <td>{item.states}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="States">
                              <span className="las la-external-link-alt"></span>
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

export default LocationTable;
