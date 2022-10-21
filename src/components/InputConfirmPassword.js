import Input from "./Input.js";

export default class InputConfirmPassword extends Input {
  constructor(inputSelector, displayErrorSelector, inputOriginalSelector) {
    super(inputSelector, displayErrorSelector);
    this.inputOriginalElement = document.querySelector(inputOriginalSelector);
  }

  init() {
    this.inputElement.addEventListener("focusout", () => {
      this.clearErrors();
      this.validateAll();
    });
  }

  validateAll() {
    if (!this.validateCointainText()) return false;
    if (!this.validateEqualsPasswords()) return false;
    return true;
  }

  validateCointainText() {
    const isValid = !!this.inputElement.value.length;
    if (!isValid) {
      this.showError("No podés dejar este campo vacío");
    }
    return isValid;
  }

  validateEqualsPasswords() {
    const password = this.inputElement.value;
    const originalPassword = this.inputOriginalElement.value;
    const isValid = password === originalPassword;
    if (!isValid) {
      this.showError("Las contraseñas no coinciden");
    }
    return isValid;
  }
}
