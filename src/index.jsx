import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Node } from './components';
import renderData from './renderData';

export default class Preview extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <Panel>
        { renderData(data) }
      </Panel>
    );
  }
}
