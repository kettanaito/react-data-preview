import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import * as themes from './themes';
import { Panel, Node } from './components';
import renderData from './renderData';

export default class Preview extends React.Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
    theme: PropTypes.string
  }

  static defaultProps = {
    theme: 'dark'
  }

  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <ThemeProvider theme={ themes[this.props.theme] }>
        <Panel>
          { renderData(data) }
        </Panel>
      </ThemeProvider>
    );
  }
}
