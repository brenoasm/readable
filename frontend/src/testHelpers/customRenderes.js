import {
  shallow
} from 'enzyme';

export const shallowUntilTarget = (instance, target, context, {
  maxTries = 10,
  _shallow = shallow,
} = {}) => {
  if (!instance) throw Error('You need to provide an component instance');
  if (!target) throw Error('A target is required');

  let root = _shallow(instance, {
    context: { ...context }
  });

  if (typeof root.type() === 'string') {
    // If type() is a string then it's a DOM Node.
    // If it were wrapped, it would be a React component.
    throw new Error(
      'Cannot unwrap this component because it is not wrapped');
  }

  for (let tries = 1; tries <= maxTries; tries++) {

    if (root.name() === target) {
      return root.shallow();
    }
    // Unwrap the next component in the hierarchy.
    root = root.dive();
  }

  throw new Error(`Could not find ${target} in rendered
    instance: ${target}; gave up after ${maxTries} tries`);
};
