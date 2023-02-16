import React from "react";

import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";

import Services from "../services/Services";
import heroImg from "../assets/images/hero-img.png";

const Home = () => {
  const year = new Date().getFullYear;

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Producto tendencia en {year}</p>
                <h2>Lleva la simplicidad y la naturalidad a tu interior</h2>
                <p>
                  Crea un ambiente sereno y armonioso en tu hogar, utilizando un
                  estilo minimalista decorado con sencillez y naturalidad
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">COMPRA YA</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="Imagen-hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
    </Helmet>
  );
};

export default Home;
