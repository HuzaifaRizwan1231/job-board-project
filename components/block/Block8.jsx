const Block8 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "icon-drawing",
      title: "Register With Us",
      text: `Create an account in just a few clicks!`,
    },
    {
      id: 2,
      icon: "icon-process",
      title: "Create Your Profile",
      text: `Set up your profile with your basic information.`,
    },
    {
      id: 3,
      icon: "icon-task",
      title: "Submit Your Project",
      text: `Got a project in mind? Submit it.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="text-center col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="work-block -type-4">
            <div className="icon-wrap">
              <span className={`icon ${item.icon}`}></span>
            </div>

            <h5 className="title">{item.title}</h5>
            <p className="text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block8;
