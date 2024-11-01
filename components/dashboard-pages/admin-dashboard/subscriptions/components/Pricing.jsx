import Link from "next/link";

const Pricing = () => {
  const pricingCotent = [
    {
      id: 1,
      packageType: "Basic",
      price: "199",
      tag: "",
      features: [
        "30 job posting",
        "3 featured job",
        "Job displayed for 15 days",
        "Premium Support 24/7",
      ],
    },
    {
      id: 2,
      packageType: "Standard",
      price: "499",
      tag: "tagged",
      features: [
        "40 job posting",
        "5 featured job",
        "Job displayed for 20 days",
        "Premium Support 24/7",
      ],
    },
    {
      id: 3,
      packageType: "Extended",
      price: "799",
      tag: "",
      features: [
        "50 job posting",
        "10 featured job",
        "Job displayed for 60 days",
        "Premium Support 24/7",
      ],
    },
  ];

  return (
    <div className="pricing-tabs tabs-box wow fadeInUp">
      {/* <!--Tabs Container--> */}
      <div className="row">
        {pricingCotent.map((item) => (
          <div
            className={`pricing-table col-lg-4 col-md-6 col-sm-12 ${item.tag}`}
            key={item.id}
          >
            <div className="inner-box">
              {item.tag ? (
                <>
                  <span className="tag">Recommended</span>
                </>
              ) : (
                ""
              )}

              <div className="title">{item.packageType}</div>
              <div className="price">
                ${item.price} <span className="duration">/ monthly</span>
              </div>
              <div className="table-content">
                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-3 gap-2">
                <button type="button" class="btn-style-one w-100">
                  Edit
                </button>
                <button type="button" class="btn-style-four w-100">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
