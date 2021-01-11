import React from "react";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { db, storage } from "../../api/firebase";
import FieldStyle from "./FieldStyle";

class CreateProductForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  validateImageWidthHeight = (imageFile) => {
    if (imageFile) {
      const maxWidthHeight = 4000;
      const minWidthHeight = 200;
      if (imageFile.width >= maxWidthHeight) {
        return (
          <Alert variant="danger">
            Image width must be less or equal to ${maxWidthHeight}px
          </Alert>
        );
      } else if (imageFile.width <= minWidthHeight) {
        return (
          <Alert variant="danger">
            Image width must be more or equal to ${minWidthHeight}px
          </Alert>
        );
      } else if (imageFile.height >= maxWidthHeight) {
        return (
          <Alert variant="danger">
            Image height must be less or equal to ${maxWidthHeight}px
          </Alert>
        );
      } else if (imageFile.height <= minWidthHeight) {
        return (
          <Alert variant="danger">
            Image height must be more or equal to ${minWidthHeight}px
          </Alert>
        );
      }
    }
  };

  validateImageFormat = (imageFile) => {
    if (imageFile) {
      const mimeType = "image/jpeg, image/png";

      if (!mimeType.includes(imageFile.type)) {
        return `Image mime type must be ${mimeType}`;
      }
    }
  };

  handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  };

  renderFileInput = ({ input, type, meta }) => {
    const mimeType = "image/jpeg, image/png";
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mimeType}
          onChange={(event) => this.handleChange(event, input)}
          required
        />
        {meta && meta.invalid && meta.error && <span>{meta.error}</span>}
      </div>
    );
  };

  handleSubmitForm = (values) => {
    const { date, desc, discount, price, title, image } = values;
    let rand = Math.random();
    storage
      .ref()
      .child(image.name + rand)
      .put(image)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then(function (downloadURL) {
          db.collection("products").add({
            title: title,
            desc: desc ? desc : "",
            price: price,
            discount: discount,
            endSaleDate: new Date(date),
            image: downloadURL,
          });
        });
      });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Create Product</h2>
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="title">Title:</Form.Label>
                  <Field
                    name="title"
                    type="text"
                    component="input"
                    style={FieldStyle}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="desc">Description:</Form.Label>
                  <Field
                    name="desc"
                    type="text"
                    component="input"
                    style={FieldStyle}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="price">Price:</Form.Label>
                  <Field
                    name="price"
                    type="number"
                    component="input"
                    style={FieldStyle}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="image">Image has to:</Form.Label>
                  <ul>
                    <li>be JPEG or PNG</li>
                    <li>have Width 200px - 4000px</li>
                    <li>have Height 200px - 4000px</li>
                  </ul>
                  <Field
                    name="image"
                    type="file"
                    validate={[
                      this.validateImageWidthHeight,
                      this.validateImageFormat,
                    ]}
                    component={this.renderFileInput}
                    style={FieldStyle}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="date">Date:</Form.Label>
                  <Field
                    name="date"
                    type="date"
                    component="input"
                    style={FieldStyle}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="discount">Discount:</Form.Label>
                  <Field
                    name="discount"
                    type="number"
                    component="input"
                    style={FieldStyle}
                  />
                </Form.Group>
                <Link to="/">
                  <Button onClick={handleSubmit(this.handleSubmitForm)}>
                    Create
                  </Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}

CreateProductForm = reduxForm({
  form: "create",
})(CreateProductForm);

export default CreateProductForm;
