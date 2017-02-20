import React from "react";
import { Field, withForm } from "../../";

function SimpleForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Log in</h1>
      <p>Simple form example</p>
      <Field
        className="simple-input"
        placeholder="Username"
        name="login"
        component="input"
        required
      />
      <Field
        className="simple-input"
        placeholder="Password"
        type="password"
        name="password"
        component="input"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default withForm({
  onSubmit: data => alert(`Form data\n${JSON.stringify(data, null, 2)}`)
})(SimpleForm);
