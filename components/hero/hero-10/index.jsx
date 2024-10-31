import Funfact2 from "@/components/fun-fact-counter/Funfact2";
import SearchForm3 from "../../common/job-search/SearchForm3";
import JobCategorie4 from "../../job-categories/JobCategorie4";
import HeroSliderGallery from "./HeroSliderGallery";

const index = () => {
  return (
    <section className="banner-section-ten">
      <HeroSliderGallery />
      {/* End slider gallery */}

      <div className="auto-container">
        <div className="cotnent-box">
          <div className="title-box" data-aso-delay="500" data-aos="fade-up">
            <h3>Find and Hire the Expert for Your Project</h3>
          </div>

          <div
            className="job-search-form"
            data-aos-delay="700"
            data-aos="fade-up"
          >
            <SearchForm3 />
          </div>
          {/* <div className="fun-fact-section">
            <Funfact2 />
          </div> */}
          {/* <!-- Job Search Form --> */}

          <div className="top-features">
            <div className="row" data-aos-delay="900" data-aos="fade-up">
              <JobCategorie4 />
            </div>
          </div>

          {/* <!-- Fun Fact Section --> */}
        </div>
        {/* <!-- content box --> */}
      </div>
    </section>
  );
};

export default index;
