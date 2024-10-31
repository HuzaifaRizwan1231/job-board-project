"use client";

import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const About4 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="y9j-BL5ocW8"
        onClose={() => setOpen(false)}
      />
      {/* End popup modal video */}

      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
        <div className="inner-column" data-aos="fade-left">
          <div className="sec-title">
            <h2>Why Choose Us</h2>
            <div className="text">
              We make it easy for you to connect with the best service providers
              for your projects.
            </div>
          </div>
          <ul className="list-style-two">
            <li>
              Expert Service Providers: Access to a skilled and vetted network.
            </li>
            <li>
              Simple, Transparent Process: Easy project submission and selection
              process.
            </li>
            <li>
              Manage Projects Easily: Control everything from a single
              dashboard.
            </li>
            <li>
              Get Competitive Quotes: Receive multiple quotes and choose the
              best fit.
            </li>
            <li>
              Reliable Support & Security: Strong support and data protection.
            </li>
          </ul>
          <div
            role="button"
            onClick={() => setOpen(true)}
            className="theme-btn btn-style-one lightbox-image"
          >
            <span className="btn-title">Read More</span>
          </div>
        </div>
      </div>
      {/* End .col about left content */}

      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <figure className="image" data-aos="fade-right">
          <Image
            width={608}
            height={600}
            src="/images/resource/image-5.png"
            alt="popup icon"
          />
          <div
            className="play-btn lightbox-image"
            role="button"
            onClick={() => setOpen(true)}
          >
            <span className="flaticon-play-button-2 icon"></span>
          </div>
        </figure>
      </div>
      {/* <!-- Image Column --> */}
    </>
  );
};

export default About4;
