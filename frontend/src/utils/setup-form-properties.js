export const setupFormProperties = (formProperties = {}) => {
  debugger
  if (
    Object.keys(formProperties).length === 0 &&
    formProperties.constructor === Object
  )
    return {};

  let properties = {};
  let formattedObject = {
    disabledSubmit: true
  };

  Object.keys(formProperties).forEach(prop => {
    const param = formProperties[prop];

    try {
      let validations = [];
      let errors = [];
      const value = '';

      let objectToReturn = {
        ...param,
        value: param.value || value,
        originalValue: value,
        isDirty: param.isDirty || false,
        isFormField: param.isFormField
      };

      if (param.validations) {
        validations = [
          ...param.validations.map(
            validation =>
              typeof validation !== 'function'
                ? Error('Invalid param. It should be a function')
                : validation
          )
          //criar funções padrões
        ];
      }

      properties = {
        ...properties,
        [prop]: {
          ...objectToReturn,
          errors,
          validations,
          name: prop,
          isValid: false
        }
      };
    } catch (e) {
      throw e;
    }
  });

  return {
    ...formattedObject,
    properties
  };
};
