import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Carrito de compras" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItem.length === 0 ? (
                <h2 className="fs-4 text-center">
                  No hay ningun producto en el carrito!
                </h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Titulo</th>
                      <th>Price</th>
                      <th>Cant</th>
                      <th>Borrar</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItem.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex aling-items-center justify-content-between">
                  Subtotal
                </h6>
                {/* <span className="fs-4 fw-bold">${totalAmount}</span> */}
              </div>
              <p className="fs-6 mt-2">Impuestos incluidos</p>
              <div>
                <button className="buy__btn w-100 ">
                  <Link to="/checkout">Finalizar pago</Link>
                </button>

                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continua comprando</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          class="ri-delete-bin-7-fill"
          onClick={deleteProduct}
        ></motion.i>{" "}
      </td>
    </tr>
  );
};

export default Cart;
