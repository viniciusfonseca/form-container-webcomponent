import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useFormContainer } from './useFormContainer'

function App() {

    const { ref: formContainer } = useFormContainer({
        withForm(getBuilder) {
            getBuilder()
                .input('name', {
                    defaultValue: 'Vinicius'
                })
                .input('email', {
                    defaultValue: 'vfonseca1618@gmail.com'
                })
        }
    })

    return (
        <form-container ref={formContainer}>
            <form action="javascript:void(0)">

                <input name="name" />
                <input name="email" />

                <input type="submit" />

                <debug-form />

            </form>
        </form-container>
    )
}

ReactDOM.render(<App />, document.querySelector('#app'))