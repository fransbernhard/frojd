import * as types from "../action-types/index";

// Get all rows
export const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}

// Update searchword state
export const updateSearch = payload => {
  return {
    type: types.UPDATE_SEARCHWORD,
    payload
  }
}

// Update filterWord state
export const updateFilter = payload => {
  return dispatch => {
    if(payload == "offices"){
      dispatch(notUpdateFilt())
    } else {
      dispatch(updateFilt(payload))
    }
  }
}

const notUpdateFilt = () => {
  console.log("NOT UPDATE FILTER");
  return {
    type: types.UPDATE_FILTER,
    payload: []
  }
}

const updateFilt = payload => {
  console.log("UPDATE FILTER");
  return {
    type: types.UPDATE_FILTER,
    payload
  }
}

// Get all offices
export const fetchOffices = payload => {
  var allOffices = []
  payload.map(pay =>
    allOffices.push(pay['office'])
  )
  const offices = [...new Set(allOffices)];

  return {
    type: types.FETCH_OFFICES,
    payload: offices
  }
}
