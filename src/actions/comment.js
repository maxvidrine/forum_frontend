import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers'

const backend_url = 'https://forum-parvum.herokuapp.com/'

export const COMMENT_REQUEST = '@@comment/COMMENT_REQUEST';
export const COMMENT_SUCCESS = '@@comment/COMMENT_SUCCESS';
export const COMMENT_FAILURE = '@@comment/COMMENT_FAILURE';

export const newComment = (message) => ({
  [RSAA]: {
      endpoint: `${backend_url}postcomment/`,
      method: 'POST',
      body: JSON.stringify({message: message}),
      headers: withAuth({ 'Content-Type': 'application/json' }),
      types: [
        COMMENT_REQUEST, COMMENT_SUCCESS, COMMENT_FAILURE
      ]
  }
})