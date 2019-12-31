import { h } from 'preact'
import register from './preact-custom-element'
import { useFormContainerContext } from './useFormContainerContext'

export function DebugForm({ nativeElement }) {

    const getContext = useFormContainerContext(nativeElement)

    return (
        <pre>
            { JSON.stringify(getContext().values, null, 4) }
        </pre>
    )
}

register(DebugForm, 'debug-form', [])