import React, { useEffect, useCallback } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getProducts } from "../../store/products/actions";
import { db } from "../../api/firebase";
import ProductCard from "./ProductCard";
import { selectProductEntities } from "../../store/selectors";

const ProductList = ({ products, getProducts }) => {
  const fetchData = useCallback(() => {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((product) => {
          let item = product.data();
          item.id = product.id;
          products.push(item);
        });
        getProducts(products);
      })
      .catch((err) => console.error(err));
  }, [getProducts]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid="md">
      <Row>
        {products &&
          products.map((product, index) => (
            <Col
              md={4}
              sm={6}
              style={{ marginBottom: "30px" }}
              key={index}
              className="d-flex align-items-stretch"
            >
              <ProductCard product={product} key={index} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: selectProductEntities(state),
  };
};

const mapDispatchToProps = {
  getProducts: getProducts,
};

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(ProductList);
