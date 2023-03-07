import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredValue = products.filter((item) => item.category === "sofa");

      setProductsData(filteredValue);
    }

    if (filterValue === "mobile") {
      const filteredValue = products.filter(
        (item) => item.category === "mobile"
      );

      setProductsData(filteredValue);
    }

    if (filterValue === "watch") {
      const filteredValue = products.filter(
        (item) => item.category === "watch"
      );

      setProductsData(filteredValue);
    }

    if (filterValue === "chair") {
      const filteredValue = products.filter(
        (item) => item.category === "chair"
      );

      setProductsData(filteredValue);
    }

    if (filterValue === "wireless") {
      const filteredValue = products.filter(
        (item) => item.category === "wireless"
      );

      setProductsData(filteredValue);
    }

    if (filterValue === "default") {
      setProductsData(products);
    } else {
      const filteredValue = products.filter(
        (item) => item.category === filterValue
      );
      setProductsData(filteredValue);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Productos" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="default">Filtra por categoria</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Telefonos</option>
                  <option value="chair">Sillas</option>
                  <option value="watch">Relojes</option>
                  <option value="wireless">Auriculares</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="3">
              <div className="filter__widget">
                <select>
                  <option>Ordena por categoria</option>
                  <option value="ascending">Ascendente</option>
                  <option value="descending">Descendiente</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Buscar ..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1>No se encontraron productos</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
