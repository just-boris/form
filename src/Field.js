import React, { Component } from "react";

export default class Field extends Component {
  onChange = value => {
    this.context.form.setValue(this.props.name, value);
  };

  onInputChange = event => {
    this.onChange(event.target.value);
  };

  componentDidMount() {
    this.context.form.addField(this);
  }

  componentWillUnmount() {
    this.context.form.removeField(this);
  }

  validate() {
    const { name } = this.props;
    const { values } = this.context.form;
    if (this.props.validation) {
      return this.props.validation(values[name], name, values);
    }
  }

  render() {
    const { name } = this.props;
    const { component, validation, ...props } = this.props;
    const { form } = this.context;

    if (typeof component === "string") {
      Object.assign(props, {
        value: form.values[name] || "",
        onChange: this.onInputChange
      });
    } else {
      Object.assign(props, {
        value: form.values[name],
        error: form.errors[name],
        onChange: this.onChange
      });
    }
    return React.createElement(component, props);
  }

  static contextTypes = {
    form: React.PropTypes.object
  };
}
