import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products &&
          products.map((product, index) => (
            <Col style={{ marginBottom: "30px" }} key={index}>
              <ProductCard product={product} key={index} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.item.products,
  };
};

const enhance = connect(mapStateToProps);

export default enhance(ProductList);
