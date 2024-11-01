import Link from "next/link.js";
import Image from "next/image.js";

export default function BlogsTable() {
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
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.slice(0, 4).map((item) => (
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
                                src={item.thumbnail}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.title}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="status">{item.status}</td>
                    <td>{item.createdAt}</td>
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
    title: "Designer’s Checklist for Every UX/UI Project",
    thumbnail: "/images/resource/payment-gateway-logo/paypal.png",
    status: "Active",
    createdAt: "7-Mar-2023",
  },
  {
    id: 2,
    title: "What Is ChatGPT? Everything You Need to Know",
    thumbnail: "/images/resource/payment-gateway-logo/square.png",
    status: "Active",
    createdAt: "6-Mar-2023",
  },
  {
    id: 3,
    title: "Medieval origins to the digital era, everything there is to know",
    thumbnail: "/images/resource/payment-gateway-logo/stripe.png",
    status: "Active",
    createdAt: "6-Mar-2023",
  },
];
