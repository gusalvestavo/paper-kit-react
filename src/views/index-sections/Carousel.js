/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { isMobile } from "react-device-detect";

import { Carousel as RespCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const falseFn = () => false;

// reactstrap components
function Carousel({ items = [] }) {
  return (
    <>
      {items.length ? (
        <div id="carousel">
          <div className="page-carousel">
            <RespCarousel
              renderThumbs={falseFn}
              emulateTouch
              infiniteLoop
              showArrows={!isMobile}
            >
              {items.map((item) => (
                <div key={item.src} style={{ height: "100vh", width: "100vw" }}>
                  <img
                    src={item.src}
                    alt={item.altText}
                    style={{ height: "100vh", objectFit: "cover" }}
                  />
                </div>
              ))}
            </RespCarousel>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            height: "100vh",
            background:
              "radial-gradient(circle, rgba(233,233,233,1) 0%, rgba(121,121,121,0.6727065826330532) 100%)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="logo-loading"
            id="icon"
            src={require("assets/img/definitive/logo/sique-centered-icon.png")}
            alt="Sique logo"
          />
        </div>
      )}
    </>
  );
}

export default Carousel;
