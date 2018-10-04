/* eslint-disable */

import * as types from '../actions';
import ModalReducer, { modalState } from './modalReducer';

describe('ModalReducer', () => {
  it('handle the right InitialState', () => {
    expect(ModalReducer(undefined, {})).toEqual(modalState);
  });

  it('handle TOGGLE_MODAL_VISIBILITY correctly', () => {
      const action = {
        type: types.TOGGLE_MODAL_VISIBILITY,
        payload: true
      };

      expect(ModalReducer(undefined, action)).toEqual({ show: true });
  });
});
