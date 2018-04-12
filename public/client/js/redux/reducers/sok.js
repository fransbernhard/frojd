import { SEARCH } from "../action-types/index"

const sok = (state = [], action) => {
  switch(action.type) {
    case SEARCH:
      return action.payload
    default:
      return state
  }
}

export default sok
