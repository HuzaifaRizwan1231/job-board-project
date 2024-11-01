import React from "react";
import data from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialTable() {
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
                  <th>Reviewer Name</th>
                  <th>Reviewer Position</th>
                  <th>Comment</th>
                  <th>Ratings</th>
                  <th>Brand Avatar</th>
                  <th>is Active</th>
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
                                src={item.avatar}
                                alt="avatar"
                                className="rounded-circle"
                              />
                            </span>
                            <h4>
                              <Link href={`/job-single-v3/${item.id}`}>
                                {item.reviewerName}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.reviewerPosition}</td>
                    <td className="text-nowrap">
                      {item.comment.length > 30
                        ? item.comment.slice(0, 27) + "..."
                        : item.comment}
                    </td>
                    <td>{item.rating} star</td>
                    <td>
                      <span className="company-logo">
                        <Image
                          width={50}
                          height={49}
                          src={item.brandAvatar}
                          alt="brandAvatar"
                          className="rounded-circle"
                        />
                      </span>
                    </td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Check">
                              <span className="las la-check-square"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>

                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Edit">
                              <span className="la la-edit"></span>
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
}
