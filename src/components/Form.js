import InputConfirmPassword from "./InputConfirmPassword.js";
import InputCountry from "./InputCountry.js";
import InputName from "./InputMail.js";
import InputPassword from "./InputPassword.js";
import InputZipcode from "./InputZipcode.js";

export default class Form {
  constructor(formSelector, callback) {
    this.formElement = document.querySelector(formSelector);
    this.inputList = [];
    this.callback = callback;
  }

  init() {
    this.formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validateInputs()) this.callback();
    });
  }

  validateInputs() {
    return this.inputList
      .map((input) => input.validateAll())
      .every((isValid) => isValid);
  }

  addInputMail(inputSelector, displayErrorSelector) {
    const newInput = new InputName(inputSelector, displayErrorSelector);
    newInput.init();
    this.inputList.push(newInput);
  }

  addInputCountry(inputSelector, displayErrorSelector) {
    const newInput = new InputCountry(inputSelector, displayErrorSelector);
    newInput.init();
    this.inputList.push(newInput);
  }

  addInputZipcode(inputSelector, displayErrorSelector) {
    const newInput = new InputZipcode(inputSelector, displayErrorSelector);
    newInput.init();
    this.inputList.push(newInput);
  }

  addInputPassword(inputSelector, displayErrorSelector) {
    const newInput = new InputPassword(inputSelector, displayErrorSelector);
    newInput.init();
    this.inputList.push(newInput);
  }

  addInputConfirmPassword(
    inputSelector,
    displayErrorSelector,
    inputOriginalSelector
  ) {
    const newInput = new InputConfirmPassword(
      inputSelector,
      displayErrorSelector,
      inputOriginalSelector
    );
    newInput.init();
    this.inputList.push(newInput);
  }
}
