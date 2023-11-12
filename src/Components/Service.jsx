import React from "react";
export default function Service(props) {
  return (
    <>
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
        </span>
        <h4 className="my-3">{props.title}</h4>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          maxime quam architecto quo inventore harum ex magni, dicta impedit.
        </p>
      </div>
    </>
  );
}
