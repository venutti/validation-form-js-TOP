import Input from "./Input.js";

export default class InputName extends Input {
  init() {
    this.inputElement.addEventListener("focusout", () => {
      this.clearErrors();
      this.validateAll();
    });
  }

  validateAll() {
    if (!this.validateCointainText()) return false;
    if (!this.validateEmailFormat()) return false;
    return true;
  }

  validateCointainText() {
    const isValid = !!this.inputElement.value.length;
    if (!isValid) {
      this.showError("No podés dejar este campo vacio!");
    }
    return isValid;
  }

  validateEmailFormat() {
    const isValid = !this.inputElement.validity.typeMismatch;
    if (!isValid) {
      this.showError("Tenés que ingresar un email válido, rey");
    }
    return isValid;
  }

  showError(msj) {
    this.displayErrorElement.innerText = msj;
    this.inputElement.setCustomValidity(msj);
  }

  clearErrors() {
    this.displayErrorElement.innerText = "";
    this.inputElement.setCustomValidity("");
  }
}
