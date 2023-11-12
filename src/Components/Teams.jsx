import React from "react";
import Team from "./Team";
export default function Teams() {
  return (
    <>
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    <Team img={"assets/img/team/1.jpg"} title={"Parveen Anand"} para={"Lead Designer"}/>
                    <Team img={"assets/img/team/2.jpg"} title={"Diana Petersen"} para={"Lead Marketer"}/>
                    <Team img={"assets/img/team/3.jpg"} title={"Larry Parker"} para={"Lead Developer"}/>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    </>
  );
}
