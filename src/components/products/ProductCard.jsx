import React from "react";
import { Card, CardImg, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { db } from "../../api/firebase";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/products/actions";
import ProductCardBottom from "./ProductCardBottom";

const ProductCard = ({ product, deleteProduct }) => {
  const { id } = product;

  const handleSubmit = (id) => () => {
    db.collection("products")
      .doc(id)
      .delete()
      .then(function () {
        deleteProduct(id);
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <Card style={{ width: "auto", height: "auto" }}>
      <CardImg
        src={product.image}
        alt={product.title}
        className="card-img-top"
        style={{ objectFit: "cover", height: "300px" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <p className="card-text">{product.desc}</p>
      </Card.Body>
      <ProductCardBottom product={product} />
      <Card.Footer>
        <Link to={`/product/${id}`}>
          <Button variant="primary" style={{ marginRight: "20px" }}>
            Edit
          </Button>
        </Link>
        <Button variant="danger" onClick={handleSubmit(id)}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

const mapDispatchToProps = {
  deleteProduct: deleteProduct,
};

const enhance = connect(null, mapDispatchToProps);

export default enhance(ProductCard);
