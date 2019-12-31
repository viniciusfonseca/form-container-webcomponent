/**
 * 
 * @param {string} state 
 * @param {string} color 
 * @param  {...any} rest 
 */
export function logActivity(state = "info", color = '#1E90FF', ...rest) {

    const submitLogStyle = `
        background-color: ${color};
        color: #000;
        text-transform: uppercase;
        padding: 2px 4px;
        font-weight: bold;
        border-radius: 2px`

    console.log(`%c${state}`, submitLogStyle, ...rest)
}