import Link from "next/link.js";
import Image from "next/image.js";

export default function StepsTable() {
  return (
    <div className="tabs-box">
      <div className="widget-title" />
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Language</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
                  <tr key={item.id}>
                    <td className="d-flex gap-3 content">
                      <h4>
                        <i className={item.icon} />
                      </h4>
                      <h6 className="text-nowrap">{item.title}</h6>
                    </td>
                    <td className="description">{item.description}</td>
                    <td>{item.language}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit Aplication">
                              <span className="la la-edit"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
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

const data = [
  {
    id: 1,
    title: "Create Account",
    icon: "la la-pencil",
    description: "It’s very easy to open an account and start your journey.",
    language: "en",
  },
  {
    id: 2,
    title: "Complete your profile",
    icon: "fab la-wpforms",
    description: "Complete your profile with all the info to get attention of client.",
    language: "en",
  },
  {
    id: 3,
    title: "Apply job or hire",
    icon: "la la-user-o",
    description: "Apply & get your preferable jobs with all the requirements and get it.",
    language: "en",
  },
];
