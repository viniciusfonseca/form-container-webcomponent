import { h } from "preact";
import { useEffect } from "preact/compat";
import { useObjectState } from "./useObjectState";
import register from "./preact-custom-element";
import { logActivity } from "./utils/logActivity";

export function FormContainer({ nativeElement: formEl }) {
    const [getForm, setForm, updateForm] = useObjectState(formEl.state || {});
    formEl.state = formEl.state || {};

    Object.assign(formEl, {
        __bootstrapped: true,
        update(payload) {
            this.state = { ...this.state, ...payload }
            setForm(payload);
        }
    })

    useEffect(() => {
        formEl.addEventListener("input", event => {
            const {
                name = event.target.getAttribute('name'),
                value
            } = event.target;
            setForm({ [name]: value });
        });
        formEl.addEventListener("submit", () => {
            logActivity("submit", void 0, formEl.state)
            formEl.dispatchEvent(
                new CustomEvent("formsubmit", { detail: getForm() })
            )
        })
        updateForm(formEl.state)
    }, []);

    useEffect(() => {
        formEl.state = getForm();
        formEl.dispatchEvent(
            new CustomEvent("formupdate", { detail: getForm() })
        );
    }, [getForm()]);

    return null;
}

register(FormContainer, "form-container", []);
