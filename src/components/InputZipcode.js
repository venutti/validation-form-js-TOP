import Input from "./Input.js";

export default class InputZipcode extends Input {
  init() {
    this.inputElement.addEventListener("focusout", () => {
      this.clearErrors();
      this.validateAll();
    });
  }

  validateAll() {
    if (!this.validateCointainText()) return false;
    if (!this.validateOnlyNumbers()) return false;
    if (!this.validateValueLength(4)) return false;
    return true;
  }

  validateCointainText() {
    const isValid = !!this.inputElement.value.length;
    if (!isValid) {
      this.showError("Necesito que ingreses un código postal (solo números)");
    }
    return isValid;
  }

  validateOnlyNumbers() {
    const isValid = /^[0-9]*$/.test(this.inputElement.value);
    if (!isValid) this.showError("Solo podes ingresar números!");
    return isValid;
  }

  validateValueLength(length) {
    const isValid = this.inputElement.value.length === length;
    if (!isValid) this.showError("Un código postal tiene que tener 4 números");
    return isValid;
  }
}
