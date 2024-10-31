import Link from "next/link";
import SearchForm from "./SearchForm";

const FooterContent4 = () => {
  const footerContent = [
    {
      id: 1,
      title: "For Client",
      colClass: "col-lg-3",
      menuList: [
        { name: "Submit Projects", route: "/" },
        { name: "Browse Categories", route: "/" },
        { name: "Client Dashboard", route: "/client-dashboard/dashboard" },
        { name: "My Bookmarks", route: "/" },
      ],
    },
    {
      id: 2,
      title: "For Service Providers",
      colClass: "col-lg-3",
      menuList: [
        { name: "Browse Projects", route: "/" },
        {
          name: "Service Provider Dashboard",
          route: "/service-providers-dashboard/dashboard",
        },
        { name: "Quotes", route: "/" },
        { name: "Packaging Prices", route: "/" },
      ],
    },
    {
      id: 3,
      title: "About Us",
      colClass: "col-lg-2",
      menuList: [
        { name: "About", route: "/" },
        { name: "Academic", route: "/" },
        { name: "Contact", route: "/" },
        { name: "Terms", route: "/" },
      ],
    },
  ];
  return (
    <>
      {footerContent.map((item) => (
        <div
          className={`footer-column ${item.colClass} col-md-6 col-sm-12`}
          key={item.id}
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title">{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="footer-column col-lg-4 col-md-12 col-sm-12">
        <div className="footer-widget">
          <h4 className="widget-title">Join Us On</h4>
          <div className="widget-content">
            <div className="newsletter-form">
              <div className="text">We don’t send spam so don’t worry.</div>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      {/* End .footer-column */}
    </>
  );
};

export default FooterContent4;
