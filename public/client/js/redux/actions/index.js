import * as types from "../action-types/index";

export const fetchPostsSuccess = payload => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}

export const fetchOfficePostsSuccess = payload => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload
  }
}



// export const update = (SEARCH, STATUS) => {
//   return (dispatch) => {
//     if(STATUS == 'filter'){
//       console.log("FILTER: " + STATUS);
//       // dispatch(searchs(SEARCH))
//     } else if (STATUS == 'search'){
//       console.log("SEARCH: " + STATUS);
//       // dispatch(fetchPostsSuccess(SEARCH))
//     } else {
//       console.log('no entry');
//     }
//   }
// }

export const updateSearch = payload => {
  return {
    type: types.UPDATE_SEARCHWORD,
    payload
  }
}

export const updateFilter = payload => {
  return {
    type: types.UPDATE_FILTER,
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
