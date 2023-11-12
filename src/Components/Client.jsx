import React from "react";
export default function Client(props) {
  return (
    <>
      <div class="col-md-3 col-sm-6 my-3">
        <a href="#!">
          <img
            class="img-fluid img-brand d-block mx-auto"
            src={props.pic}
            alt="..."
            aria-label="Microsoft Logo"
          />
        </a>
      </div>
    </>
  );
}
