# form-container-webcomponent

This is a custom, reactive HTML Form element made with Preact & Parcel following the Web Components v1 spec.

Before you start to develop, run `npm install`, then run `npm start`.

To make a production build, run `npm run build`. The resulting script is located at `dist/index.js`.

To use the component, you just include the script at the body of any document you'd like and call the component with the tags `<form-container> ... </form-container>`.

Example:

```html
<html>
    <head>
        <title>Form Container</title>
    </head>
    <body>
        <h1>Native Form Container</h1>

        <form-container>
            <form autocomplete="off" action="javascript:void(0)">
                <div>
                    <div>
                        <input name="name" />
                    </div>
                    <div>
                        <input name="email" />
                    </div>
                    <input type="submit" />
                </div>
                <debug-form />
            </form>
        </form-container>

        <script src="js/form-container-webcomponent.js"></script>
    </body>
</html>
```

Every element inside the form-container that fires the `input` event will immediatelly notify the form container and update its internal state. But in order to notify registered inputs to update its values when the form's state changes, you have to register every input inside it.

To register an input, add a script to the body of the document and call the `withForm` function:

```js
const form = document.querySelector("form-container");
withForm(form)
  .input("name", {
    defaultValue: "Vinicius",
    validate(value) {
      return value.length > 0;
    }
  })
  .input("email", {
    defaultValue: "vfonseca1618@gmail.com",
    validate(value) {
      return value.length > 0;
    }
  });
```

Note that calling the `withForm` function is only mandatory if you want to sync the inputs' values with the form internal state.

You can attach a `submit` event to the form container to capture its internal state when the user is done with filling it:

```js
const form = document.querySelector("form-container");
form.addEventListener('submit', event => {

})
```

## API

### form-container

Attributes:

| attribute | type   | description                |
|-----------|--------|----------------------------|
| state     | object | The form's internal state. |

### withForm

```ts
function withForm(formEl: FormContainerElement): IFormBuilder
```

### FormBuilder

```ts
interface IFormBuilder {
    input(inputName: string, options: IInputOptions): IFormBuilder,
    error(selector: string, name: string)
}
```

### IInputOptions

```ts
interface IInputOptions {
    defaultValue?: string
    validate?(): boolean
}
```

## Roadmap

* [ ] Add validation when input blurs
* [ ] Add validation when form submit, prevent its propagation when has errors
* [ ] Add error messages to validations