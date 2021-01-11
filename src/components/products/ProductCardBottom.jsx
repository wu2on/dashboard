import React from "react";
import { Card } from "react-bootstrap";

const ProductCardBottom = ({ product }) => {
  const { price, salePrice, daysLeft } = product;

  return salePrice && daysLeft ? (
    <Card.Text style={{ paddingLeft: "20px" }}>
      <span style={{ textDecoration: "line-through" }}>{price} UAH</span>
      <br />
      <span style={{ fontSize: "20px" }}>{salePrice} UAH </span> <br />
      <small className="text-muted">Till the end of the sales: </small>
      <small className="text-muted">{daysLeft}</small>
    </Card.Text>
  ) : (
    <Card.Text style={{ paddingLeft: "20px" }}>
      <span style={{ fontSize: "20px" }}>{price} UAH</span>
    </Card.Text>
  );
};

export default ProductCardBottom;
