"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Funfact = () => {
  const [focus, setFocus] = useState(false);

  const counterUpContent = [
    {
      id: 1,
      startCount: "0",
      endCount: "10",
      endPointText: "K",
      meta: "10k daily visitors",
      animationDelay: "0",
    },
    {
      id: 2,
      startCount: "0",
      endCount: "12",
      endPointText: "k",
      meta: "Over 12k open projects",
      animationDelay: "100",
    },
    {
      id: 3,
      startCount: "0",
      endCount: "200",
      endPointText: "",
      meta: "Over 200 service providers",
      animationDelay: "200",
    },
  ];

  return (
    <>
      {counterUpContent.map((val) => (
        <div
          className="counter-column col-lg-4 col-md-4 col-sm-12 "
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="count-box">
            <span className="count-text">
              <CountUp
                start={focus ? val.startCount : null}
                end={val.endCount}
                duration={2}
              >
                {({ countUpRef }) => (
                  <InView
                    as="span"
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </InView>
                )}
              </CountUp>
            </span>
            {val.endPointText}
          </div>
          <h4 className="counter-title">{val.meta}</h4>
        </div>
      ))}
    </>
  );
};

export default Funfact;
