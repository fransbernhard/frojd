import * as types from "../action-types/index";

export const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}

export const searching = value => {
  return {
    type: types.SEARCH,
    value
  }
}

export const fetchOffices = payload => {
  var allOffices = []
  payload.map(pay =>
    allOffices.push(pay['office'])
  )
  const offices = [...new Set(allOffices)];
  console.log("ARR: " + offices);

  return {
    type: types.FETCH_OFFICES,
    payload: offices
  }
}
