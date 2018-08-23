export const setupFormProperties = (formProperties, isDirty = false) => {
  let formattedObject = {};

  Object.keys(formProperties).forEach(prop => {
    const param = formProperties[prop];

    try {
      let validations = [];
      let errors = [];

      let objectToReturn = {
        value: !!param.value ? '' : param.value,
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

      debugger
      if (validations.length > 0 && !param.isDirty) {
        errors = validations.map(validation => validation(param.value));
      }

      formattedObject = {
        ...formattedObject,
        [prop]: {
          ...objectToReturn,
          errors,
          validations
        }
      };
    } catch (e) {
      throw e;
    }
  });

  return formattedObject;
};
