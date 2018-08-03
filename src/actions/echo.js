import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

export const ECHO_REQUEST = '@@echo/ECHO_REQUEST';
export const ECHO_SUCCESS = '@@echo/ECHO_SUCCESS';
export const ECHO_FAILURE = '@@echo/ECHO_FAILURE';

const backend_url = 'https://forum-parvum.herokuapp.com/'

export const echo = (message) => ({
  [RSAA]: {
      endpoint: `${backend_url}api/echo/`,
      method: 'POST',
      body: JSON.stringify({message: message}),
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        ECHO_REQUEST, ECHO_SUCCESS, ECHO_FAILURE
      ]
  }
})