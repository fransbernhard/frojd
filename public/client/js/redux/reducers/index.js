import { combineReducers } from 'redux'
import fetch from './fetch'
import posts from './posts'

const app = combineReducers({
  fetch,
  posts
})

export default app;
