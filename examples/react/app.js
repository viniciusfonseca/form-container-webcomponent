import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {

    /** @type {React.MutableRefObject<HTMLElement>} */
    const formContainer = useRef()

    useEffect(() => {
        const form = formContainer.current
        form.addEventListener('formsubmit', event => {
            console.log('got form on react:', event.detail)
        })
        window.withForm(form)
            .input('name', {
                defaultValue: 'Vinicius'
            })
            .input('email', {
                defaultValue: 'vfonseca1618@gmail.com'
            })
    }, [])

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