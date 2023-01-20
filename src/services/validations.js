// TODO: Add here the function to validate

var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const isEmpty = (label) => !label || label.length === 0;
const isValid = (label) => label.length >= 8 && format.test(label) && /\d/.test(label);

exports.isEmpty = isEmpty;
exports.isValid = isValid;