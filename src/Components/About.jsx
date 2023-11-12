import React from "react";
export default function About(props) {
  return (
    <>
      <div className="timeline-image">
        <img className="rounded-circle img-fluid" src={props.img} alt="..." />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.date}</h4>
          <h4 className="subheading">{props.title}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
            voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
            recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium
            consectetur!
          </p>
        </div>
      </div>
    </>
  );
}
