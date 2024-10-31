import Header from "./Header";
import Footer from "./Footer";
import Hero10 from "../hero/hero-10";
import JobFeatured7 from "../job-featured/JobFeatured7";
import RecentJobs from "../job-featured/RecentJobs";
import BrowseUsaJobs from "../job-categories/BrowseUsaJobs";
import Blog3 from "../blog/Blog3";
import Candidates from "../client/Candidates";
import TopsJobs from "../job-featured/TopsJobs";
import FunFact from "../fun-fact-counter/Funfact";
import Testimonial5 from "../testimonial/Testimonial5";
import RegBanner2 from "../block/RegBanner2";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";
import Image from "next/image";
import Block8 from "../block/Block8";
import JobCategorie5 from "../job-categories/JobCategorie5";
import Funfact from "../fun-fact-counter/Funfact";
import About4 from "../about/About4";
import TopCompany from "../top-company/TopCompany";
import CallToAction4 from "../call-to-action/CallToAction4";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero10 />
      {/* <!-- End Banner Section--> */}

      <section className="layout-pt-120 layout-pb-120">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works</h2>
            <div className="text">
              Create an account in just a few clicks! Join our platform and gain
              access to a network of experienced service providers ready to help
              you with your project. Registration is fast, simple, and free.
            </div>
          </div>
          {/* End sec-title */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <Block8 />
            {/* <!-- Work Block --> */}
          </div>
        </div>
      </section>
      {/* How it works end */}

      <section className="registeration-banners">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <RegBanner2 />
          </div>
        </div>
      </section>
      {/* <!-- End Registeration Banners --> */}

      <section className="layout-pt-120 layout-pb-60 border-bottom-none">
        <div className="bg-shape -bottom -right js-rellax">
          <Image
            width={213}
            height={289}
            src="/images/index-11/shapes/1.png"
            alt="image"
          />
        </div>
        {/* End bg-shape */}

        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Categories</h2>
            <div className="text">2020 projects live - 293 added today.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie5 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section
        className="testimonial-section-four"
        style={{
          backgroundImage: "url(/images/background/11.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center light">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          {/* End sec-title */}

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial5 />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Testimonial Section --> */}

      <div className="fun-fact-section">
        <div className="auto-container">
          <div className="row" data-aos="fade-up">
            <FunFact />
          </div>
        </div>
      </div>
      {/* <!-- Fun Fact Section --> */}

      <section className="about-section style-two">
        <div className="auto-container">
          <div className="row">
            <About4 />
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}
      <section className="layout-pt-60 layout-pb-60">
        <div className="auto-container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="sec-title mb-0">
                <h2>Top Registered Service Providers</h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <a href="#" className="button -arrow text-dark-blue">
                Browse
                <span className="fa fa-angle-right ms-1"></span>
              </a>
            </div>
          </div>
          {/* End .row */}

          <div className="carousel-outer pt-50" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}
      <CallToAction4 />
      {/* <!-- End Call To Action --> */}
      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
