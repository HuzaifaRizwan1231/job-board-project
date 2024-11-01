const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "las la-list",
      countNumber: "189",
      metaName: "Total Conversation",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "las la-comment-slash",
      countNumber: "189",
      metaName: "Total Deleted",
      uiClass: "ui-red",
    },
    {
      id: 3,
      icon: "las la-user-times",
      countNumber: "0",
      metaName: "Total Blocked",
      uiClass: "ui-yellow",
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
