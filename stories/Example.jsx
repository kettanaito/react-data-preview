import React from 'react';
import Preview from '../src';

class Pooper {}

const data = {
  firstName: 'John',
  lastName: 'Maverick',
  someClass: Pooper,
  newsletter: false,
  setState(a, b, c) {},
  unknownFunc: () => { return false; },
  emptyArray: [],
  orders: [
    {
      id: 1,
      price: 1230,
      status: 'NEW',
      reorder: function() {}
    },
    {
      id: 2,
      price: 3400,
      status: 'CLOSED',
      reorder: function() {}
    }
  ],
  userInfo: {
    isBusiness: false
  }
};

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Preview data={ data } />
        <Preview data={ data } theme="light" />
      </div>
    );
  }
}
