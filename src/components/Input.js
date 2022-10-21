export default class Input {
  constructor(inputSelector, displayErrorSelector) {
    this.inputElement = document.querySelector(inputSelector);
    this.displayErrorElement = document.querySelector(displayErrorSelector);
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
