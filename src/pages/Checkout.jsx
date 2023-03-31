import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import "../styles/checkout.css";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [isLoading, setIsLoading] = useState(false);

  console.log(totalAmount, totalQty);

  const handleCheckout = () => {
    setTimeout(() => {
      setIsLoading(true);
      toast.success("Pedido realizado, pronto te llegara un mail", {});
    }, 750);

    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/";
    }, 3000);
  };

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
                  <input type="text" placeholder="Ingresa tu nombre" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Ingresa tu mail" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="number"
                    placeholder="Numero de telefono"
                    required
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Pais" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Ciudad" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Dirección" required />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Codigo postal" required />
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

              <button
                className="buy__btn w-100"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Procesando pedido..." : "Enviar pedido"}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
