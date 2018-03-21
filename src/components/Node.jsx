import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import List from './List';
import renderData from '../renderData';
import getValueExcerpt from '../getValueExcerpt';

const NodeContainer = styled.li`
position: relative;
padding-left: .9rem;

list-style: none;

&:not(:last-child) {
  margin-bottom: .25rem;
}
`;

const NodeArrow = styled.span`
position: absolute;
top: 6px;
left: 3px;
display: inline-block;
margin: auto .3rem auto 0;
height: 0;

border-style: solid;
border-width: 5px;
border-color: ${({ theme }) => theme.node.arrowBackground} transparent transparent;

transform: rotate(${({ isExpanded }) => isExpanded ? 0 : -90}deg);
transform-origin: center;

${({ isExpanded}) => isExpanded && `
  top: 7px;
  left: 0;
`}
`;

const NodeName = styled.span`
background-color: ${({ theme }) => theme.node.name.background};
color: ${({ theme }) => theme.node.name.foreground};
cursor: pointer;
`;

export default class Node extends React.PureComponent {
  static propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    value: PropTypes.any.isRequired
  }

  state = {
    isExpanded: false
  }

  handleClick = (event) => {
    event.stopPropagation();
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
  }

  renderChildren = () => {
    const { children, value } = this.props;
    if (children) return children;

    return (
      <List>
        { renderData(value) }
      </List>
    );
  }

  render() {
    const { isExpanded } = this.state;
    const { children, name, value } = this.props;
    const isExpandable = (Array.isArray(value)) || (value instanceof Object);
    const hasBlueValue = Array.isArray(value) || (typeof value === 'function');

    return (
      <NodeContainer>
        { isExpandable && (<NodeArrow isExpanded={ isExpanded } />) }
        <NodeName onClick={ this.handleClick }>{ name }: </NodeName>
        { getValueExcerpt(value) }
        { isExpanded && this.renderChildren() }
      </NodeContainer>
    );
  }
}