import React from "react";
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

function FormControl(
  { component, validation, label, onChange, error, ...props }
) {
  return (
    <div className="form-control">
      <label className="form-control__label">{label}</label>
      <input
        className="form-control__input"
        onChange={event => onChange(event.target.value)}
        {...props}
      />
      {error && <div className="form-control__error">{error}</div>}
    </div>
  );
}

FormControl.defaultProps = {
  value: ""
};

function ValidationErrors({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate className="form">
      <h1>Sign up</h1>
      <p>Form example with validation</p>
      <Field
        label="Login"
        name="login"
        validation={validLogin}
        component={FormControl}
      />
      <Field
        label="Email"
        type="email"
        name="email"
        validation={validEmail}
        component={FormControl}
      />
      <Field
        label="Password"
        type="password"
        name="password"
        validation={validPassword}
        component={FormControl}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default withForm({
  onSubmit: data => alert(`Form data\n${JSON.stringify(data, null, 2)}`)
})(ValidationErrors);
