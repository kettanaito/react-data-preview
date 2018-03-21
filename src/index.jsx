import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/light';
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
      <ThemeProvider theme={ theme }>
        <Panel>
          { renderData(data) }
        </Panel>
      </ThemeProvider>
    );
  }
}
