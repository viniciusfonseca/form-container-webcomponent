import { input } from "./input";
import { error } from "./error";

/**
 *
 * @param {HTMLElement} formEl
 */
export function withForm(formEl) {

    if (!formEl.__bootstrapped) {
        prebootstrap(formEl)
    }

    return {
        input(inputName, options) {
            input({
                formEl,
                inputEl: formEl.querySelector(`[name="${inputName}"]`),
                options
            });
            return this;
        },
        error(selector, name) {
            error({
                formEl,
                wrapper: formEl.querySelector(selector),
                name
            })
            return this
        }
    };
}

function prebootstrap(formEl) {
    Object.assign(formEl, {
        __bootstrapped: true,
        update(payload) {
            this.state = {
                ...this.state,
                ...payload
            }
        }
    })
}