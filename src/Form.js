import React, { Component } from "react";

export default class Form extends Component {
  fields = [];
  state = {
    values: this.props.initialValues,
    errors: {}
  };

  setValue = (name, value) => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  };

  handleSubmit = (event) => {
    if(event && event.preventDefault) {
      event.preventDefault();
    }
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state.values);
    }
  };

  addField = field => {
    this.fields.push(field);
  };

  removeField = field => {
    this.fields = this.fields.filter(f => f !== field);
  };

  validate() {
    return this.fields.reduce(
      (errors, field) => {
        const error = field.validate();
        if (error) {
          errors[field.props.name] = error;
        }
        return errors;
      },
      {}
    );
  }

  getChildContext() {
    const { values, errors } = this.state;
    return {
      form: {
        setValue: this.setValue,
        addField: this.addField,
        removeField: this.removeField,
        values,
        errors
      }
    };
  }

  render() {
    const { values, errors } = this.state;
    const Component = this.props.component;
    const formProps = {
      ...this.props,
      values,
      errors,
      handleSubmit: this.handleSubmit
    };
    return <Component {...formProps} />;
  }

  static childContextTypes = {
    form: React.PropTypes.object
  };

  static defaultProps = {
    initialValues: {}
  };
}
