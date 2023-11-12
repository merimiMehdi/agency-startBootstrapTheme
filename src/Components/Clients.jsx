import React from "react";
import Client from "./Client";
export default function Clients() {
  return (
    <>
        <div class="py-5">
            <div class="container">
                <div class="row align-items-center">
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
