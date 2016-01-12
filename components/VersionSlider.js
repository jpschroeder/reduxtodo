import React, { Component, PropTypes } from 'react'

const VersionSlider = ({past, future, onPastClick, onFutureClick}) => {
  return (
  <input type={'range'} min={0} 
    max={past.length + future.length} 
    value={past.length} 
    onChange={(event) => {
      var value = event.target.value;
      if (value == past.length) return;
      if (value > past.length) {
        onFutureClick(value - past.length - 1);
      } 
      if (value < past.length) {
        onPastClick(value);
      }
    }}/>
  );
}

export default VersionSlider;