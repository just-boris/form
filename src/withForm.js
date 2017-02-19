import React from "react";
import Form from "./Form";

export default function withForm(config) {
  return Component => props => {
    return <Form component={Component} {...config} {...props} />;
  };
}
