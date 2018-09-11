export const setupFormProperties = (formProperties = {}) => {
  if (
    Object.keys(formProperties).length === 0 &&
    formProperties.constructor === Object
  )
    return {};

  const properties = Object.keys(formProperties).reduce((newObj, prop) => {
    const param = formProperties[prop];

    const value = '';
    const objectToReturn = {
      ...param,
      value: param.value || value,
      originalValue: value,
      isDirty: param.isDirty || false,
      isFormField: param.isFormField,
      isValid: param.isValid || false
    };

    return {
      ...newObj,
      [prop]: {
        ...objectToReturn,
        errors: [],
        validations: param.validations && [
          ...param.validations.map(
            validation =>
            typeof validation !== 'function' ?
            Error('Invalid param. It should be a function') :
            validation
          )
        ],
        name: prop
      }
    };
  }, {});

  return {
    disabledSubmit: true,
    properties
  };
};
