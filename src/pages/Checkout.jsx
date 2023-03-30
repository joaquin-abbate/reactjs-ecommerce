import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";

import "../styles/checkout.css";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col className="form__bg" lg="8">
              <h6 className="mb-4 fw-bold">Datos de facturacion</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Ingresa tu nombre" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Ingresa tu mail" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Numero de telefono" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Pais" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Ciudad" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Dirección" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Codigo postal" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Cant. total: <span>{totalQty} producto/s</span>
                </h6>
                <h6>
                  Total: <span>${totalAmount}</span>
                </h6>
                <h6>
                  Envio:
                  <span>GRATIS</span>
                </h6>

                <h4>
                  Precio final: <span>${totalAmount}</span>
                </h4>
              </div>

              <button className="buy__btn  w-100">Enviar pedido</button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
