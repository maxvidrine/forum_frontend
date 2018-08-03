import * as comment from '../actions/comment'

const initialState = {
  message: ""
}

export default (state=initialState, action) => {
  switch(action.type) {
    case comment.COMMENT_SUCCESS:
      return {
        message: action.payload.message
      }
    default:
      return state
  }
}

export const serverMessage = (state) => state.message