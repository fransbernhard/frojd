import { combineReducers } from 'redux'
import rows from './rows'
import office from './office'
import searchWord from './searchWord'

const app = combineReducers({
  rows,
  office,
  searchWord
})

export default app
