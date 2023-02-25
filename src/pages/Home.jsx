import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import products from "../assets/data/products";
import heroImg from "../assets/images/hero-img.png";
import { Container, Row, Col } from "reactstrap";
import counterImg from "../assets/images/counter-timer-img.png";
import "../styles/home.css";
import Clock from "../components/UI/Clock";

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [WatchsProducts, setWatchsProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    //* Sillas filtro
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    //* Sillones filtro
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    //* Telefonos filtro
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    //* Auris filtro
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    //* Relojes filtro
    const filteredWatchsProducts = products.filter(
      (item) => item.category === "watch"
    );

    setBestSalesProducts(filteredBestSalesProducts);
    setTrendingProducts(filteredTrendingProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setWatchsProducts(filteredWatchsProducts);
  }, []);

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

            <Col lg="6" md="6" className="hero__container-img">
              <div className="hero__img">
                <img src={heroImg} alt="Imagen-hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Tendencias</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Mejores ventas!</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row className="container__count">
            <Col lg="6" md="12" className="col__container">
              <div className="clock___top-content">
                <h4 className="text-white fs-6 mb-2">Oferta limitada</h4>
                <h3 className="text-white fs-5 mb-3">Silla de calidad</h3>
              </div>
              <Clock />
              <div className="container__btn-buy">
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn store__btn"
                >
                  <Link to="/shop">Visita la tienda</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Tecnologia</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Relojes</h2>
            </Col>
            <ProductList data={WatchsProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
