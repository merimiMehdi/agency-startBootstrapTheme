import React from "react";
import About from "./About";
export default function Abouts() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <About
              img={"assets/img/about/1.jpg"}
              date={"2009-2011"}
              title={"Our Humble Beginnings"}
            />
          </li>
          <li class="timeline-inverted">
            <About
              img={"assets/img/about/2.jpg"}
              date={"March 2011"}
              title={
                "An Agency is Born"
              }
            />
          </li>
          <li>
            <About
              img={"assets/img/about/3.jpg"}
              date={"December 2015"}
              title={"Transition to Full Service"}
            />
          </li>
          <li class="timeline-inverted">
            <About
              img={"assets/img/about/4.jpg"}
              date={"July 2020"}
              title={"Phase Two Expansion"}
            />
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
