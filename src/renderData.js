import React from 'react';
import { Node } from './components';

export default function renderData(data) {
  if (Array.isArray(data)) {
    return renderArray(data);
  }

  if (data instanceof Object) {
    return renderObject(data);
  }
}

function renderArray(data) {
  return data.map((value, index) => {
    return (<Node key={ index } name={ index } data={ value } />);
  });
}

function renderObject(data) {
  return Object.keys(data).map((keyName, index) => {
    return (<Node key={ index } name={ keyName } data={ data[keyName] } />);
  });
}
