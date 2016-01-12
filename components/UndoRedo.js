import React, { Component, PropTypes } from 'react'

const UndoButton = ({enabled, onClick, children}) => {
  if (!enabled) {
    return <span> </span>
  }
  return <a href="#" onClick={onClick}>{children}</a>
}

const UndoRedo = ({undoEnabled, redoEnabled, onUndo, onRedo}) => {
  return (
    <div style={{marginTop: '20px'}}>
      <UndoButton enabled={undoEnabled} onClick={onUndo}>Undo</UndoButton>
      {' '}
      <UndoButton enabled={redoEnabled} onClick={onRedo}>Redo</UndoButton>
    </div>
  );
}

export default UndoRedo;