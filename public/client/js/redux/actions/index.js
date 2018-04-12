import * as types from "../action-types/index";

export const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}

export const updateSearch = payload => {
  return {
    type: types.UPDATE_SEARCHWORD,
    payload
  }
}

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
