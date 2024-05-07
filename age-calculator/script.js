"use strict";

console.log("Hello world!");

const month = document.getElementById("month");
const date = document.getElementById("date");
const year = document.getElementById("year");

const submit = document.getElementById("submit");

const validate = (item, ...validators) => {
  for (const validator of validators) {
    console.log(item);
    if (!validator.validate(item)) {
      return [false, validator.errorMessage];
    }
  }
  return [true, "success"];
};

class Validator {
  constructor(validate, errorMessage) {
    this._validate = validate;
    this._errorMessage = errorMessage;
  }
  get validate() {
    return this._validate;
  }

  get errorMessage() {
    return this._errorMessage;
  }
}

const checkEmpty = new Validator(
  (val) => `${val}`.trim().length > 0,
  "This field is required."
);
const checkRange = function (
  minBoundary,
  maxBoundary,
  targetContext = "The value"
) {
  return new Validator(
    (val) => val >= minBoundary && val <= maxBoundary,
    `${targetContext} must be between ${minBoundary} and ${maxBoundary}`
  );
};

const checkMonth = checkRange(1, 12, "month");
const checkYear = checkRange(1970, 2024, "year");
const checkDate = checkRange(1, 31, "date");

const showError = (target, message) => {
  target.classList.add("error");
  //   console.log(typeof target.parentElement);
  console.log(target.parentElement);
  const errorElement = document.createElement("p");
  errorElement.classList.add("error-message");
  errorElement.innerText = message;
  console.log(errorElement);
  target.parentElement.classList.add("error-label");
  target.parentElement.insertAdjacentElement("beforeend", errorElement);
};

submit.addEventListener("click", () => {
  console.log(month.value);
  console.log(year.value);
  console.log(date.value);
  const [monthIsValid, monthErrorMessage] = validate(
    +month.value,
    checkEmpty,
    checkMonth
  );
  const [yearIsValid, yearErrorMessage] = validate(
    +year.value,
    checkEmpty,
    checkYear
  );
  const [dateIsValid, dateErrorMessage] = validate(
    +date.value,
    checkEmpty,
    checkDate
  );
  if (!monthIsValid) {
    showError(month, monthErrorMessage);
  }
  if (!yearIsValid) {
    showError(year, yearErrorMessage);
  }
  if (!dateIsValid) {
    showError(date, dateErrorMessage);
  }
});
