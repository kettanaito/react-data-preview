import React from 'react';
import Preview from '../src';

class UserImage {}

const data = {
  firstName: 'John',
  lastName: 'Maverick',
  isAuthenticated: true,
  image: UserImage,
  logout() {},
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
  settings: {
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
