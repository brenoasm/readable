export const setupFormProperties = (properties = {}) => {
  if (
    Object.keys(properties).length === 0 &&
    properties.constructor === Object
  )
    return {};

  const parsedProperties = Object.keys(properties).reduce((newObj, prop) => {
    const param = properties[prop];

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
              typeof validation !== 'function'
                ? Error('Invalid param. It should be a function')
                : validation
          )
        ],
        name: prop
      }
    };
  }, {});

  return {
    disabledSubmit: true,
    properties: parsedProperties
  };
};
