#Yet another Form utility for React.js

## Example

Wrap your component via decorator `withForm`, then you can place your fields inside using `Field` component

```js
import { withForm, Field } from 'form';

function MyApp({handleSubmit}) {
  return <form onSubmit={handleSubmit}>
    <Field name="name" component="input" />
    <Field name="email" type="email" component="input" />
  </form>
}

withForm({
  onSubmit(data) {
    // do something with submitted and valid data
    console.log(data);
  }
})(MyApp);
```

For more comprehensive example, see [example](example/src/SimpleForm.js) folder.

## API

### `withForm([formOptions])(Component)`

Turns your component into form. Available options:

* `onSubmit(data)` - function, that called when submit is triggered and validation has passed
* `initialValues` - initial values for the form

Those options also can be provided as props during render. E.g.:

```js
const MyAppForm = withForm()(MyApp)

ReactDOM.render(<MyAppForm onSubmit={submitCallback} />)
```

### `Field`

React component that renders field.

* `component` - **required** A react component, that will be used to render field. Can be also a string,
`input` or `select`, for example.
* `name` - **required** Name of the field
* `validation(value, name, formValues)` - a validation function that should return undefined to mark field as passed. If function returns a value, it will be used as an error message
