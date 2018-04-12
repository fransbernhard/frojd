import { combineReducers } from 'redux'
import rows from './rows'
import office from './office'
import sok from './sok'

const app = combineReducers({
  rows,
  office,
  sok
})

export default app
