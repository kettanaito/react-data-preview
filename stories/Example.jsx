import React from 'react';
import Preview from '../src';

const data = {
  firstName: 'John',
  lastName: 'Maverick',
  newsletter: false,
  orders: [
    {
      id: 1,
      price: 1230,
      status: 'NEW'
    },
    {
      id: 2,
      price: 3400,
      status: 'CLOSED'
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
