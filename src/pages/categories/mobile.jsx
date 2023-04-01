import React, { useState, useEffect } from "react";
import CommonSection from "../../components/UI/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../../styles/shop.css";
import products from "../../assets/data/products";
import ProductList from "../../components/UI/ProductList";
import { Link } from "react-router-dom";
import DropdownMenu from "../../components/UI/dropdown";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filteredValue = products.filter((item) => item.category === "mobile");

    setProductsData(filteredValue);
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

  useEffect(() => {
    handleFilter();
  }, []);

  return (
    <Helmet title="Shop">
      <CommonSection title="Telefonos" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="filter__widget">
                <DropdownMenu />
              </div>
            </Col>

            <Col lg="6" md="12">
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
