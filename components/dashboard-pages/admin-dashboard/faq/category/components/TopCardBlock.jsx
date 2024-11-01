const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "las la-chart-bar",
      countNumber: "189",
      metaName: "Total Categories",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "las la-check-circle",
      countNumber: "189",
      metaName: "Active Categories",
      uiClass: "ui-green",
    },
    {
      id: 3,
      icon: "las la-times-circle",
      countNumber: "0",
      metaName: "Inactive Categories",
      uiClass: "ui-red",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-4 col-lg-4 col-md-6 col-sm-12"
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
