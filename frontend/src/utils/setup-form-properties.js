export const setupFormProperties = (formProperties) => {
  if (
    Object.keys(formProperties).length === 0 &&
    formProperties.constructor === Object
  )
  return {};

  let formattedObject = {
    formIsValid: false
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
        isDirty: param.isDirty || false
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

      formattedObject = {
        ...formattedObject,
        [prop]: {
          ...objectToReturn,
          errors,
          validations,
          name: prop
        }
      };
    } catch (e) {
      throw e;
    }
  });

  return formattedObject;
};
