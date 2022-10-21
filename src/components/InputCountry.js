import Input from "./Input.js";

export default class InputCountry extends Input {
  init() {
    this.inputElement.addEventListener("focusout", () => {
      this.clearErrors();
      this.validateAll();
    });
  }

  validateAll() {
    if (!this.validateCointainText()) return false;
    if (!this.validateOnlyString()) return false;
    return true;
  }

  validateCointainText() {
    const isValid = !!this.inputElement.value.length;
    if (!isValid) {
      this.showError("Tenés que ingresar el nombre de un país!");
    }
    return isValid;
  }

  validateOnlyString() {
    const isValid = /^[A-Za-z]*$/.test(this.inputElement.value);
    if (!isValid)
      this.showError("El nombre de un país solo puede tener letras!");
    return isValid;
  }
}
