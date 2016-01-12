import React, { Component, PropTypes } from 'react'

const Version = ({index, version, onVersionClick}) => {
  return (
    <li>
      <a href="#" onClick={() => onVersionClick(index)}>
        Version: {version}
      </a>
    </li>
  );
}

const VersionList = ({past, future, onPastClick, onFutureClick}) => {
  return (
    <ul>
      {past.map((version, index) =>
        <Version key={index} index={index} version={index} onVersionClick={onPastClick}/>
      )}
      <li>Version: {past.length}</li>
      {future.map((version, index) => 
        <Version key={index} index={index} version={past.length + 1 + index} onVersionClick={onFutureClick}/>
      )}
    </ul>
  );
}

export default VersionList;