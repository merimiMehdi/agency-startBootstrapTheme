import React from "react";
import Service from "./Service";
export default function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row text-center">
          <Service title={"E-Commerce"}  icon={"fa-shopping-cart"}/>
          <Service title={"Responsive Design"} icon={"fa-lock"}/>
          <Service title={"Web Security"} icon={"fa-laptop"}/>
        </div>
      </div>
    </section>
  );
}
