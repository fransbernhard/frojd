import { combineReducers } from 'redux'
import rows from './rows'
import office from './office'
import searchWord from './searchWord'
import filterWord from './filterWord'

const app = combineReducers({
  rows,
  office,
  searchWord,
  filterWord
})

export default app
