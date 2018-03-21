import React from 'react';
import { List, Node } from './components';

export default function renderData(data) {
  if (Array.isArray(data)) {
    return renderArray(data);
  }

  if (typeof data === 'function') {
    return renderFunction(data);
  }

  if (data instanceof Object) {
    return renderObject(data);
  }
}

function renderArray(data) {
  if (data.length === 0) {
    return (<div><i>Empty array</i></div>);
  }

  return data.map((value, index) => {
    return (
      <Node
        key={ index }
        name={ index }
        value={ value } />
      );
  });
}

function renderObject(data) {
  return Object.keys(data).map((keyName, index) => {
    return (
      <Node
        key={ index }
        name={ keyName }
        value={ data[keyName] } />
      );
  });
}

function renderFunction(data) {
  const { prototype } = data;

  return (
    <React.Fragment>
      <Node name="length" value={ data.length } />
      <Node name="name" value={ data.name || null } />
      <Node name="prototype" value={ prototype.constructor }>
        <List>
          <Node name="length" value={ prototype.constructor.length } />
          <Node name="name" value={ prototype.constructor.name } />
        </List>
      </Node>
    </React.Fragment>
  );
}
