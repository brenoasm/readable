export const validValue = value => {
  if (!value) return 'Campo requirido';
};

export const validOption = value => {
  if (!value) return 'Selecione uma opção válida';
};

export const isTheFormValid = (properties, actualPropertyName, isValid) => {
  return Object.keys(properties)
    .map(
      prop =>
        properties[prop].isFormField
          ? prop === actualPropertyName
            ? isValid
            : properties[prop].isValid
          : true
    )
    .every(isThePropertyValid => isThePropertyValid);
};

export const runValidations = (validations, value) => {
  let errors = [];

  validations.forEach(validation => {
    const result = validation(value);

    if (result) errors.push(result);
  });

  return errors;
};
