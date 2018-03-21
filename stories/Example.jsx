import React from 'react';
import Preview from '../src';

const data = {
  firstName: 'John',
  lastName: 'Maverick',
  newsletter: false,
  setState(a, b, c) {},
  unknownFunc: () => { return false; },
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
      <Preview data={ data } />
    );
  }
}
