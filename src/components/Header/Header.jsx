import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { motion } from "framer-motion";

const nav__links = [
  { path: "home", display: "Home" },

  { path: "shop", display: "Shop" },

  { path: "cart", display: "Cart" },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Shopstar</h1>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>

              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>

              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile__menu">
              <i class="ri-menu-line"></i>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
