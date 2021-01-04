import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Form, Button, Container, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import useInput from "../../hooks/useInput";
import queries from "../../api/queries";
import { signIn } from "../../store/auth/actions";

const Login = ({ signIn }) => {
  const email = useInput("", { isEmpty: true, minLength: 6, isEmail: true });
  const pass = useInput("", { isEmpty: true, minLength: 6 });
  const [authError, setAuthError] = useState("");
  const { login } = queries();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setAuthError("");
      await login(email.value, pass.value).then((result) => {
        signIn(result);
      });
      history.push("/");
    } catch (error) {
      setAuthError(error.message);
    }
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {email.isDirty && email.isEmpty && (
              <Alert variant="danger">The email field cannot be empty</Alert>
            )}
            {email.isDirty && email.minLengthError && (
              <Alert variant="danger">Email minimum length 6 characters</Alert>
            )}
            {email.isDirty && email.emailError && (
              <Alert variant="danger">The email is not correct!</Alert>
            )}
            {pass.isDirty && pass.isEmpty && (
              <Alert variant="danger">The password field cannot be empty</Alert>
            )}
            {pass.isDirty && pass.minLengthError && (
              <Alert variant="danger">
                Password minimum length 6 characters
              </Alert>
            )}
            {authError && <Alert variant="danger">{authError}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  type="email"
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => pass.onChange(e)}
                  onBlur={(e) => pass.onBlur(e)}
                  value={pass.value}
                  type="password"
                  required
                />
              </Form.Group>
              <Button
                className="w-100"
                type="submit"
                disabled={!email.inputValid || !pass.inputValid}
              >
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  );
};

const mapDispatchToProps = {
  signIn: signIn,
};

const enhance = connect(null, mapDispatchToProps);

export default enhance(Login);
