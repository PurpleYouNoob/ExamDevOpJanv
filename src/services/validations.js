// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;
const isValid = (label) => label.length >= 8 ;

exports.isEmpty = isEmpty;
exports.isValid = isValid;