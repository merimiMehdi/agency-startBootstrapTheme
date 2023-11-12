import React from "react";
import Client from "./Client";
export default function Clients() {
  return (
    <>
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <Client pic={"assets/img/logos/microsoft.svg"}/>
                    <Client pic={"assets/img/logos/google.svg"}/>
                    <Client pic={"assets/img/logos/facebook.svg"}/>
                    <Client pic={"assets/img/logos/ibm.svg"}/>
                </div>
            </div>
        </div>
    </>
  );
}
