const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "la la-chart-bar",
      countNumber: "22",
      metaName: "Total",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "las la-clock",
      countNumber: "9382",
      metaName: "Pending",
      uiClass: "ui-yellow",
    },
    {
      id: 3,
      icon: "las la-envelope-open",
      countNumber: "74",
      metaName: "Open",
      uiClass: "ui-red",
    },
    {
      id: 4,
      icon: "las la-envelope",
      countNumber: "32",
      metaName: "Closed",
      uiClass: "ui-green",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon ${item.icon}`}></i>
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