import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
};

export default EditProduct;
