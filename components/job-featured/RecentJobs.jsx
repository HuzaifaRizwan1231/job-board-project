import Link from "next/link";
import jobFeatured from "../../data/orders";
import Image from "next/image";

const RecentJobs = () => {
  return (
    <>
      {jobFeatured.slice(20, 22).map((item) => (
        <div className="job-block-four" key={item.id}>
          <div className="inner-box">
            <ul className="job-other-info">
              {item.jobType.map((val, i) => (
                <li key={i} className={`${val.styleClass}`}>
                  {val.type}
                </li>
              ))}
            </ul>
            <span className="company-logo">
              <Image
                width={90}
                height={90}
                src={item.logo}
                alt="featured job"
              />
            </span>
            <span className="company-name">Catalyst</span>
            <h4>
              <Link href={`/job-single-v3/${item.id}`}>{item.jobTitle}</Link>
            </h4>
            <div className="location">
              <span className="icon flaticon-map-locator"></span>
              {item.location}
            </div>
          </div>
        </div>
        // End job-block
      ))}
    </>
  );
};

export default RecentJobs;
