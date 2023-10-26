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
import React, { useState } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarLogoDirection, setNavbarLogoDirection] = useState("column");
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
        setNavbarLogoDirection("row");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarLogoDirection("column");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <Link
            to="/"
            className="navbar-logo"
            style={{ flexDirection: navbarLogoDirection }}
          >
            <img
              id="icon"
              src={require("assets/img/definitive/logo/sique-icon.png")}
              alt="Sique logo"
              style={{
                marginRight: navbarLogoDirection === "row" ? -24 : 0,
              }}
            />
            <img
              id="caption"
              src={require("assets/img/definitive/logo/sique-caption.png")}
              alt="Sique caption"
            />
          </Link>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <IconTextNavLink
                icon="nc-alert-circle-i"
                text="Sobre a Sique"
                to="/sobre"
              />
            </NavItem>
            <NavItem>
              <IconTextNavLink icon="nc-email-85" text="Contato" />
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/sique.rs"
                target="_blank"
                title="Siga-nos no Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/sique.rs"
                target="_blank"
                title="Siga-nos no Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

const IconTextNavLink = ({ icon, text, ...props }) => (
  <NavLink
    {...props}
    tag={Link}
    style={{ display: "flex", alignItems: "center", gap: 4 }}
  >
    <i className={`nc-icon ${icon}`} /> {text}
  </NavLink>
);

export default ExamplesNavbar;
