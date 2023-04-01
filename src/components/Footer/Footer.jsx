import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-#0a1d37">Shopstar</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Shopstar es sin duda uno de los mejores e-commerce en el mercado
              actual debido a su amplia variedad de productos disponibles para
              la venta, que incluyen desde sillones, sillas, auriculares,
              teléfonos móviles y hasta relojes.
            </p>
          </Col>

          <Col lg="3">
            <div className="footer__quicks-links">
              <h4 className="quick__links-title">Categorias</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="shop/mobile">Telefonos</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="shop/chair">Sillas</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="shop/sofa">Sillones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="shop/watch">Relojes</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="shop/wireless">Auriculares</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer__quicks-links">
              <h4 className="quick__links-title">Shopstart</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Politica de privacidad</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quicks-links">
              <h4 className="quick__links-title">Contacto</h4>
              <ListGroup className="footer__contatc">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>732 Vistalba, Mendoza, Argentina</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+26173202369111</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>cuentaspamjoa@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              &copy;Copyrigth {year} desarrolado por Joaquin Abbate
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
