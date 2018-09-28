/* eslint-disable */

import React, { Fragment } from 'react';

import Modal from './';

describe('Modal', () => {
  it('renders the modal', () => {
    const initialProps = {
      show: true
    };

    const wrapper = shallow(<Modal {...initialProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should trigger the handleClick function when clicked', () => {
    const initialProps = {
      show: true,
      handleClick: jest.fn()
    };

    const wrapper = shallow(<Modal {...initialProps} />);

    wrapper.simulate('click');
    expect(initialProps.handleClick).toHaveBeenCalled();
  });

  it('should render a ModalContents component when passing children to Modal.Header', () => {
    const initialProps = {
      show: true
    };

    const wrapper = shallow(
      <Modal {...initialProps}>
        {() => (
          <Modal.Header>
            <span>Testing header</span>
          </Modal.Header>
        )}
      </Modal>
    );

    expect(wrapper.find('ModalContents')).toHaveLength(1);
  });

  it('should render a ModalContents component when passing children to Modal.Body', () => {
    const initialProps = {
      show: true
    };

    const wrapper = shallow(
      <Modal {...initialProps}>
        {() => (
          <Modal.Body>
            <span>Testing body</span>
          </Modal.Body>
        )}
      </Modal>
    );

    expect(wrapper.find('ModalContents')).toHaveLength(1);
  });

  it('should render a ModalContents component when passing children to Modal.Footer', () => {
    const initialProps = {
      show: true
    };

    const wrapper = shallow(
      <Modal {...initialProps}>
        {() => (
          <Modal.Footer>
            <span>Testing footer</span>
          </Modal.Footer>
        )}
      </Modal>
    );

    expect(wrapper.find('ModalContents')).toHaveLength(1);
  });

  it(`should render three ModalContents component when passing children to
    Modal.Header, Modal.Body and Modal.Footer`, () => {
    const initialProps = {
      show: true
    };

    const wrapper = shallow(
      <Modal {...initialProps}>
        {() => (
          <Fragment>
            <Modal.Header>
              <span>Testing header</span>
            </Modal.Header>
            <Modal.Body>
              <span>Testing body</span>
            </Modal.Body>
            <Modal.Footer>
              <span>Testing footer</span>
            </Modal.Footer>
          </Fragment>
        )}
      </Modal>
    );

    expect(wrapper.find('ModalContents')).toHaveLength(3);
  });
});
