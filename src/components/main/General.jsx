import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./Navbar";
import CreateProductForm from "../products/CreateProductForm";
import ProductList from "../products/ProductList";
import EditProduct from "../products/EditProduct";

const General = ({ isAuth }) => {
  // if (!isAuth) return <Redirect to="login" />;
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/create" render={() => <CreateProductForm />} />
          <Route path="/" render={() => <ProductList />} />
          <Route path="/product/:id" render={() => <EditProduct />} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.user.currentUser.uid,
  };
};

const enhance = connect(mapStateToProps);

export default enhance(General);
