import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import { shallowUntilTarget } from './testHelpers/customRenderes';
import diff from 'jest-diff';

configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

global.shallowUntilTarget = shallowUntilTarget;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.mockStore = mockStore;
global.getRouterMock = ({ location, match }) => {
  const router = {
    history: new BrowserRouter().history,
    route: {
      location: {
        ...location
      },
      match: {
        ...match
      },
    },
  };

  return router;
};

expect.extend({
  toDeepEqual(received, expected) {
    const parsedReceived = JSON.parse(JSON.stringify(received));
    const parsedExpected = JSON.parse(JSON.stringify(expected));

    const pass = this.equals(parsedReceived, parsedExpected);

    const message = pass
      ? () =>
          this.utils.matcherHint('.not.toBe') +
          '\n\n' +
          `Expected value to not be (using Object.is):\n` +
          `  ${this.utils.printExpected(expected)}\n` +
          `Received:\n` +
          `  ${this.utils.printReceived(received)}`
      : () => {
          const diffString = diff(expected, received, {
            expand: this.expand,
          });
          return (
            this.utils.matcherHint('.toBe') +
            '\n\n' +
            `Expected value to be (using Object.is):\n` +
            `  ${this.utils.printExpected(expected)}\n` +
            `Received:\n` +
            `  ${this.utils.printReceived(received)}` +
            (diffString ? `\n\nDifference:\n\n${diffString}` : '')
          );
        };

    return {actual: received, message, pass};
  }
});
