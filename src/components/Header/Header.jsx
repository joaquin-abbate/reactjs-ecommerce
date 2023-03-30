import React, { useRef, useEffect, useState } from "react";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];

const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const profileActionRef = useRef(null);

  const [showProfileActions, setShowProfileActions] = useState(false);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Cerraste sesion");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () => {
    setShowProfileActions(!showProfileActions);
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <Link to={`../home`}>
              <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Shopstar</h1>
              </div>
            </Link>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>

              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile-pic">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="Foto-de-perfil"
                  onClick={toggleProfileActions}
                />

                <div
                  className={`profile__actions ${
                    showProfileActions
                      ? "show__profileActions"
                      : "hide__profileActions"
                  }`}
                  ref={profileActionRef}
                >
                  {currentUser ? (
                    <span onClick={logout}>
                      <Link to="/login">Deslogearse</Link>{" "}
                    </span>
                  ) : (
                    <div className="d-flex aling-items-center justify-content-center flex-column">
                      <Link to="/singup">Registrarse</Link>

                      <Link to="/login">Iniciar Sesión</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
