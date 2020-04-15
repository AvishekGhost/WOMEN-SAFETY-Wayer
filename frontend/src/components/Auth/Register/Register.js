import React, { useState, useCallback } from "react";
import { withRouter } from "react-router-dom";

import firebase from "../../../FirebaseConfig";
import { writeUserData } from "../../../utility";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import classes from "./Register.module.css";

const Signup = (props) => {
  const { history, setFormDisplay } = props;
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = useCallback(
    async (
      email,
      password,
      userName,
      age,
      gender,
      imageURL,
      address,
      phone,
      aadhar,
      SOS_phone
    ) => {
      try {
        const userCredentials = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        writeUserData(
          userCredentials.user.uid,
          userName,
          email,
          age,
          gender,
          imageURL,
          address,
          phone,
          aadhar,
          SOS_phone
        );
        setIsLoading(false);
        history.push("/");
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    },
    [history]
  );

  const formSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setError(null);

      const {
        username,
        email,
        password,
        age,
        gender,
        imageURL,
        address,
        phone,
        aadhar,
        SOS_phone,
      } = event.target.elements;

      console.log(
        username,
        email,
        password,
        age,
        gender,
        imageURL,
        address,
        phone,
        aadhar,
        SOS_phone
      );

      setIsLoading(true);
      setFormError(false);
      handleSignUp(
        email.value,
        password.value,
        username.value,
        age,
        gender,
        imageURL,
        address,
        phone,
        aadhar,
        SOS_phone
      );
    },
    [handleSignUp]
  );

  return (
    <section className={classes.signup}>
      <Container>
        <Row className="py-2">
          <Col
            md={12}
            className="my-2 p-2 d-flex justify-content-center align-items-center"
          >
            <Card className={classes.signupCard} body>
              <h2>Register</h2>
              <Form onSubmit={formSubmit}>
                {formError && (
                  <Alert variant="danger">Invalid email or password!</Alert>
                )}
                {error && <Alert variant="danger">{error.message}</Alert>}
                <Form.Group controlId="formBasicName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Enter username"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type={hiddenPassword ? "password" : "text"}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name="age"
                    type="number"
                    placeholder="Enter Age"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    name="gender"
                    type="text"
                    placeholder="Enter Gender"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicImageURL">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    name="imageURL"
                    type="text"
                    placeholder="Enter imageURL"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    name="address"
                    type="text"
                    placeholder="Enter address"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>phone</Form.Label>
                  <Form.Control
                    name="phone"
                    type="number"
                    placeholder="Enter address"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicAadhar">
                  <Form.Label>Aadhar</Form.Label>
                  <Form.Control
                    name="aadhar"
                    type="number"
                    placeholder="Enter Aadhar"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicSOS_phone">
                  <Form.Label>SOS_phone</Form.Label>
                  <Form.Control
                    name="SOS_phone"
                    type="number"
                    placeholder="Enter SOS_phone"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Show Password"
                    onChange={(event) => setHiddenPassword(!hiddenPassword)}
                  />
                </Form.Group>
                <Button
                  className={classes.signupButton}
                  variant="primary"
                  type="submit"
                >
                  Sign Up&nbsp;&nbsp;
                  {isLoading && (
                    <Spinner animation="grow" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  )}
                </Button>
                <div className="mt-3">
                  Already have an account?{" "}
                  <span
                    className={classes.mockLink}
                    onClick={(e) => setFormDisplay("login")}
                  >
                    Login
                  </span>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withRouter(Signup);
