import { useRef, useEffect } from "react"

function noop() {}

export function useFormContainer({
    withForm = noop
}) {

    /** @type {React.MutableRefObject<HTMLElement>} */
    const formContainer = useRef()
    
    useEffect(() => {
        const form = formContainer.current
        form.addEventListener('formsubmit', event => {
            console.log('got form on react:', event.detail)
        })
        withForm(() => window.withForm(form))
    }, [])

    return {
        ref: formContainer
    }

}
