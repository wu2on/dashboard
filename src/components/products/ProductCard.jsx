import React from "react";
import { Card, Button, CardImg } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <CardImg src={product.img} alt={product.title} />
      <div>
        <div className="card-title">{product.title}</div>
        <p className="card-text">{product.desc}</p>
        <Button className="btn btn-primary" style={{ marginRight: "30px" }}>
          Edit
        </Button>
        <Button className="btn btn-danger">Delete</Button>
      </div>
    </Card>
  );
};

export default ProductCard;
