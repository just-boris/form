import React, { Component } from "react";
import { Card, CardActions, CardTitle, CardText } from "react-toolbox/lib/card";
import Input from "react-toolbox/lib/input/Input";
import Button from "react-toolbox/lib/button/Button";
import { Field, withForm } from "../../";

function validLogin(value) {
  if (!value) {
    return "Login is required";
  }
  if (!/^\S+$/.test(value)) {
    return "Login should not have spaces";
  }
}

function validEmail(value) {
  if (!value) {
    return "Email is required";
  }
  if (value.indexOf("@") === -1) {
    return "Value should be a valid email";
  }
}

function validPassword(value) {
  if (!value) {
    return "Password is required";
  }
  if (value.length < 8) {
    return "Password should be at least 8 characters long";
  }
}

class SignupForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} noValidate>
        <Card raised style={{ width: "400px", margin: "2em auto" }}>
          <CardTitle title="Sign up" />
          <CardText>
            <Field
              label="Pick a login"
              name="login"
              validation={validLogin}
              component={Input}
            />
            <Field
              label="Email"
              type="email"
              name="email"
              validation={validEmail}
              component={Input}
            />
            <Field
              label="Password"
              type="password"
              name="password"
              validation={validPassword}
              component={Input}
            />
          </CardText>
          <CardActions>
            <Button type="submit" primary raised label="Send" />
          </CardActions>
        </Card>
      </form>
    );
  }
}

export default withForm({
  onSubmit: data => alert(`Form data\n${JSON.stringify(data, null, 2)}`)
})(SignupForm);
