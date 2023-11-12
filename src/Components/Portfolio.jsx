import React from "react";
export default function Portfolio(props) {
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="portfolioModal1"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={props.img} alt="..." />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{props.title}</div>
            <div className="portfolio-caption-subheading text-muted">{props.para}</div>
          </div>
        </div>
      </div>
    </>
  );
}
