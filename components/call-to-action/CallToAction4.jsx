import Subscribe from "./subcribe-box/Subscribe";

const CallToAction4 = () => {
  return (
    <section className="subscribe-section">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="sec-title">
            <h2>Subscribe</h2>
            <div className="text">
              List your project and get quotes from many service providers.
            </div>
          </div>
          {/* End .sec-title */}

          <div className="form-column">
            <div className="subscribe-form">
              <Subscribe btnStyle="btn-style-seven" />
            </div>
          </div>
          {/* End .form-column */}
        </div>
        {/* End outer-box */}
      </div>
    </section>
  );
};

export default CallToAction4;
