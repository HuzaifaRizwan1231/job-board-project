const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "la-list",
      countNumber: "189",
      metaName: "Total",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "la-shield",
      countNumber: "189",
      metaName: "Active",
      uiClass: "ui-green",
    },
    {
      id: 3,
      icon: "la-times-circle-o",
      countNumber: "0",
      metaName: "Inactive",
      uiClass: "ui-red",
    },
    {
      id: 4,
      icon: "la-user-shield",
      countNumber: "164",
      metaName: "Verified",
      uiClass: "ui-yellow",
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
