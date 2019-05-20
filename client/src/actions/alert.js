import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4(); // use uuid package to randomly generate id
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  }); // dispatch an alert send to reducer

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
