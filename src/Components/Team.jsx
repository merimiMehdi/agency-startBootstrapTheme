import React from "react";
export default function Team(props) {
  return (
    <>
      <div class="col-lg-4">
        <div class="team-member">
          <img class="mx-auto rounded-circle" src={props.img} alt="..." />
          <h4>{props.title}</h4>
          <p class="text-muted">{props.para}</p>
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Parveen Anand Twitter Profile"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Parveen Anand Facebook Profile"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            class="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Parveen Anand LinkedIn Profile"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </>
  );
}
