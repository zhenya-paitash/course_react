import axios from 'axios'
import { setAlert } from './alert'
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types'


// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    baseURL: 'http://localhost:5000',
    heders: {
      // 'user-agent': 'node.js',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    }
  }

  // const body = JSON.stringify({ name, email, password });
  const body = { name, email, password };

  try {

    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

  } catch(e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};