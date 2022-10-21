import Input from "./Input.js";

export default class InputPassword extends Input {
  init() {
    this.inputElement.addEventListener("focusout", () => {
      this.clearErrors();
      this.validateAll();
    });
  }

  validateAll() {
    if (!this.validateCointainText()) return false;
    if (!this.validatePassword()) return false;
    return true;
  }

  validateCointainText() {
    const isValid = !!this.inputElement.value.length;
    if (!isValid) {
      this.showError("Tenés que ingresar una contraseña");
    }
    return isValid;
  }

  validatePassword() {
    const password = this.inputElement.value;
    const isValid =
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password);
    if (!isValid) {
      this.showError(
        "La contraseña debe tener, al menos, una mayúscula, una minúscula y un número"
      );
    }
    return isValid;
  }
}
