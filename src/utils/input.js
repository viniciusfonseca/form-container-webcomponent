/**
 *
 * @param {object} p
 * @param {HTMLElement} p.formEl
 * @param {HTMLInputElement} p.inputEl
 * @param {import(".").InputOptions} p.options
 */
export function input({ formEl, inputEl, options }) {
    formEl.update({
        [inputEl.name]: (
            inputEl.value = options.defaultValue || ""
        )
    });
    formEl.addEventListener("formupdate", event => {
        inputEl.value = event.detail[inputEl.name]
    })
}
