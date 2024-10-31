import Image from "next/image";
import Link from "next/link";

const RegBanner2 = () => {
  const regBannerContent = [
    {
      id: 1,
      name: "Service Providers",
      text: ` Find High-Quality Clients and Grow Your Reputation. Join Now and Start Bidding on Projects Today.`,
      avatar: "/images/resource/employ.png",
      bannerClass: "banner-style-one",
      width: "221",
      height: "281",
    },
    {
      id: 2,
      name: "Client",
      text: ` Simplify your project - Let us connect you with experts. Post a Project and Get the Expert Quotes.`,
      avatar: "/images/resource/candidate.png",
      bannerClass: "banner-style-two",
      width: "207",
      height: "283",
    },
  ];
  return (
    <>
      {regBannerContent.map((item) => (
        <div
          className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
          key={item.id}
        >
          <div className="inner-box">
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <Link href="/register" className="theme-btn btn-style-five">
                {item.id === 1 ? "Search for Projects" : "Submit Your Project"}
              </Link>
            </div>
            <figure className="image">
              <Image
                width={item.width}
                height={item.height}
                src={item.avatar}
                alt="resource"
              />
            </figure>
          </div>
        </div>
      ))}
    </>
  );
};

export default RegBanner2;
