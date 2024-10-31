import Heading from "@/components/dashboard-pages/Heading";

const TopCardBlock = () => {
  const cardContentTotals = {
    title: "Totals",
    items: [
      {
        id: 1,
        icon: "flaticon-briefcase",
        countNumber: "22",
        metaName: "Total Orders",
        uiClass: "ui-blue",
      },
      {
        id: 2,
        icon: "la-file-invoice",
        countNumber: "9382",
        metaName: "Total Clients",
        uiClass: "ui-red",
      },
      {
        id: 3,
        icon: "la-comment-o",
        countNumber: "74",
        metaName: "Total Sales",
        uiClass: "ui-yellow",
      },
      {
        id: 4,
        icon: "la-bookmark-o",
        countNumber: "32",
        metaName: "Total Projects",
        uiClass: "ui-green",
      },
      {
        id: 5,
        icon: "flaticon-briefcase",
        countNumber: "22",
        metaName: "Total Service Providers",
        uiClass: "ui-blue",
      },
      {
        id: 6,
        icon: "la-file-invoice",
        countNumber: "9382",
        metaName: "Total Applied Projects",
        uiClass: "ui-red",
      },
      {
        id: 7,
        icon: "la-comment-o",
        countNumber: "74",
        metaName: "Total KYC Request",
        uiClass: "ui-yellow",
      },
      {
        id: 8,
        icon: "la-bookmark-o",
        countNumber: "32",
        metaName: "Total Project Bookmarks",
        uiClass: "ui-green",
      },
    ],
  };
  const cardContentRecents = {
    title: "Recents",
    items: [
      {
        id: 1,
        icon: "flaticon-briefcase",
        countNumber: "22",
        metaName: "Popular plans",
        uiClass: "ui-blue",
      },
      {
        id: 2,
        icon: "la-file-invoice",
        countNumber: "9382",
        metaName: "Recent KYC request",
        uiClass: "ui-red",
      },
      {
        id: 3,
        icon: "la-comment-o",
        countNumber: "74",
        metaName: "Recent Projects",
        uiClass: "ui-yellow",
      },
      {
        id: 4,
        icon: "la-bookmark-o",
        countNumber: "32",
        metaName: "Recent Orders",
        uiClass: "ui-green",
      },
      {
        id: 5,
        icon: "flaticon-briefcase",
        countNumber: "22",
        metaName: "Most viewed Projects",
        uiClass: "ui-blue",
      },
      {
        id: 6,
        icon: "la-file-invoice",
        countNumber: "9382",
        metaName: "Most ordered Plan",
        uiClass: "ui-red",
      },
      {
        id: 7,
        icon: "la-comment-o",
        countNumber: "74",
        metaName: "Overview of sales",
        uiClass: "ui-yellow",
      },
    ],
  };

  return (
    <>
      <Heading title={cardContentTotals.title} />
      {cardContentTotals.items.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>0</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}

      <Heading title={cardContentRecents.title} />
      {cardContentRecents.items.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>0</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;
