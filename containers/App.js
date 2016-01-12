import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import UndoRedo from '../components/UndoRedo'
import VersionSlider from '../components/VersionSlider'
import VersionList from '../components/VersionList'
import * as TodoActions from '../actions/todos'
import { ActionCreators } from 'redux-undo';

class App extends Component {
  render() {
    const { todos, actions, past, future, undoactions, undoEnabled, redoEnabled } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        <UndoRedo undoEnabled={undoEnabled} redoEnabled={redoEnabled} onUndo={undoactions.undo} onRedo={undoactions.redo} />
        <VersionList past={past} future={future} onPastClick={undoactions.jumpToPast} onFutureClick={undoactions.jumpToFuture} />
        <VersionSlider past={past} future={future} onPastClick={undoactions.jumpToPast} onFutureClick={undoactions.jumpToFuture} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos.present,
    past: state.todos.past,
    future: state.todos.future,
    undoEnabled: state.todos.past.length !== 0,
    redoEnabled: state.todos.future.length !== 0,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
    undoactions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
