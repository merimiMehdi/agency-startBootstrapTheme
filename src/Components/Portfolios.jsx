import React from "react";
import Portfolio from "./Portfolio";
export default function Portfolios() {
    return(
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <Portfolio img={"../assets/img/portfolio/1.jpg"} title={"Threads"} para={"Illustration"}/>
                    <Portfolio img={"../assets/img/portfolio/2.jpg"} title={"Explore"} para={"Graphic Design"}/>
                    <Portfolio img={"../assets/img/portfolio/3.jpg"} title={"Finish"} para={"Identity"}/>
                    <Portfolio img={"../assets/img/portfolio/4.jpg"} title={"Lines"} para={"Branding"}/>
                    <Portfolio img={"../assets/img/portfolio/5.jpg"} title={"Southwest"} para={"Website Design"}/>
                    <Portfolio img={"../assets/img/portfolio/6.jpg"} title={"Window"} para={"Photography"}/>
                </div>
            </div>
        </section>
    )
}