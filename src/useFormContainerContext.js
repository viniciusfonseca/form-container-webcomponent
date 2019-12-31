import { useCallback, useEffect } from 'preact/compat'
import { getFormContainerElement } from './getFormContainerElement'
import { useObjectState } from './useObjectState'

export function useFormContainerContext(nativeElement) {

    const [ getState, setState ] = useObjectState({ values: {} })

    const formContainerElement = getFormContainerElement(nativeElement)

    const updateListener = useCallback(event => {
        setState({ values: event.detail })
    }, [])

    useEffect(() => {
        formContainerElement.addEventListener('formupdate', updateListener)
        return () => formContainerElement.removeEventListener('formupdate', updateListener)
    }, [])

    return getState
}