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

// reactstrap components
import { Button, Container } from "reactstrap";
import Carousel from "views/index-sections/Carousel";

// core components

function LandingPageHeader({ title, carouselItems }) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <Carousel items={carouselItems} />
      <div className="filter" />
      <Container>
        <div className="motto text-center">
          <h1>{title}</h1>
          <h3>Start designing your landing page here.</h3>
          <br />
          <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="btn-round mr-1"
            color="neutral"
            target="_blank"
            outline
          >
            <i className="fa fa-play" />
            Watch video
          </Button>
          <Button className="btn-round" color="neutral" type="button" outline>
            Download
          </Button>
        </div>
      </Container>
    </>
  );
}

export default LandingPageHeader;
