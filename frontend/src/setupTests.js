import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import { shallowUntilTarget } from './testHelpers/customRenderes';

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
