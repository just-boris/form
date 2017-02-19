import React, { Component } from "react";

export default class Field extends Component {
  onChange = value => {
    this.context.form.setValue(this.props.name, value);
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
    const props = this.props;
    const { form } = this.context;
    const Component = this.props.component;
    return (
      <Component
        {...props}
        value={form.values[props.name]}
        error={form.errors[props.name]}
        onChange={this.onChange}
      />
    );
  }

  static contextTypes = {
    form: React.PropTypes.object
  };
}
