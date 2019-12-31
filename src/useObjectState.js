import { useState, useRef } from 'preact/compat'

export function useObjectState(initialState = {}) {
    const [state, setState] = useState(() => initialState);
    const ref = useRef();
    ref.current = state;
  
    return [
        () => ref.current,
        merge => setState((ref.current = { ...ref.current, ...merge })),
        state => setState(state)
    ];
}
  