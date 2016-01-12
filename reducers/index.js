import { combineReducers } from 'redux'
import undoable, { distinctState } from 'redux-undo'
import todos from './todos'

const rootReducer = combineReducers({
  todos: undoable(todos, { filter: distinctState() })
})

export default rootReducer
