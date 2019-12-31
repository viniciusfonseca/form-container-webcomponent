import { withForm } from "../src/utils/withForm";
 
const form = document.querySelector("form-container");
withForm(form)
    .input("name", {
        defaultValue: "Vinicius",
        validate(value) {
            return value.length > 0
        }
    })
    .input("email", {
        defaultValue: "vfonseca1618@gmail.com",
        validate(value) {
            return value.length > 0
        }
    });
